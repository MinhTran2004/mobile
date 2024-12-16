const express = require('express');
const Address = require('../model/address');
const Cart = require('../model/cart');
const Bill = require('../model/bill');
const Account = require('../model/account');

let moment = require('moment')
let dateFormat = require('date-format')
var config = require('../vnPay/default.json');
const router = express.Router();


router.get('/getAllBillByStatus', async (req, res) => {
    const { idAccount, status } = req.query;

    const reponse = await Bill.find({ account: idAccount, status: status }).limit(10);
    if (reponse) {
        res.send({ status: true, data: reponse });
    } else {
        res.send({ status: false });
    }

})

router.delete('/deleteBillById/:id', async (req, res) => {
    const { id } = req.params;

    const reponse = await Bill.findByIdAndDelete(id);
    if (reponse) {
        res.send({ status: true });
    } else {
        res.send({ status: false })
    }
})



// set up VNPAY
function sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}
let globalDataBill = {};

router.post('/create_payment_url', async (req, res) => {
    globalDataBill = req.body;

    var ipAddr =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress; // đúng 

    var tmnCode = config.vnp_TmnCode
    var secretKey = config.vnp_HashSecret
    var vnpUrl = config.vnp_Url
    var returnUrl = config.vnp_ReturnUrl


    var date = new Date();
    let createDate = moment(date).format('YYYYMMDDHHmmss');
    var orderId = dateFormat(date, 'HHmmss');
    var orderInfo = '**Nap tien cho thue bao 0123456789. So tien 100,000 VND**'    // Thông tin mô tả nội dung thanh toá
    var orderType = req.body.orderType;  ////Mã danh mục hàng hóa. Mỗi hàng hóa sẽ thuộc một nhóm danh mục do VNPAY quy định. Xem thêm bảng Danh mục hàng hóa

    let locale = req.body.language;
    let amount = req.body.totalCost;


    if (locale === null || locale === '' || locale === undefined) {
        locale = 'vn';
    }


    var currCode = 'VND';
    var vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = "vn";
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderId;
    vnp_Params['vnp_OrderType'] = 'other';
    vnp_Params['vnp_Amount'] = amount * 100;  /// số tiền thanh toán 
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;

    // if(bankCode !== null && bankCode !== ''){
    //     vnp_Params['vnp_BankCode'] = bankCode;
    // }
    vnp_Params = sortObject(vnp_Params);

    var querystring = require('qs');
    var signData = querystring.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer.from(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
    // console.log("vnp_Params",vnp_Params);

    res.status(200).json({
        vnpUrl: vnpUrl,
    });
})

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        // Tạo một hóa đơn mới
        const newBill = new Bill({
            account: data.account,
            address: data.address,
            coupon: data.coupon,
            createAt: data.createAt,
            dataProduct: data.dataProduct,
            paymentMethod: data.paymentMethod,
            transport: data.transport,
            totalCost: data.totalCost,
            status: data.status,
        });

        // // Lưu hóa đơn vào cơ sở dữ liệu
        const savedBill = await newBill.save();

        return res.status(201).json({ status: true, message: 'Thêm hóa đơn thành công!', bill: savedBill });
    } catch (error) {
        console.error('Lỗi khi thêm hóa đơn:', error);
        return res.status(500).json({ status: false, message: 'Đã xảy ra lỗi khi thêm hóa đơn!', error });
    }
});



router.get("/vnpay_return", async (req, res) => {
    let vnp_Params = req.query;
    let secureHash = vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    let tmnCode = config.vnp_TmnCode;
    let secretKey = config.vnp_HashSecret;

    let querystring = require('qs');
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer.from(signData, 'utf-8')).digest("hex");

    const vnp_ResponseCode = req.query.vnp_ResponseCode;
    const vnp_TransactionStatus = req.query.vnp_TransactionStatus;

    console.log("vnp_ResponseCode:", vnp_ResponseCode);
    console.log("vnp_TransactionStatus:", vnp_TransactionStatus);

    const dataBill = globalDataBill;

    // Kiểm tra mã hash
    if (secureHash !== signed) {
        return res.status(400).send("Giao dịch không hợp lệ.");
    }

    // Kiểm tra mã phản hồi
    if (vnp_ResponseCode === '00') {
        const successPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Đặt Hàng Thành Công</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    margin-top: 50px;
                }
                .message {
                    font-size: 24px;
                    color: green;
                }
                .button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    text-decoration: none;
                    font-size: 16px;
                }
                .button:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Đặt Hàng Thành Công!</h1>
                <p class="message">Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.</p>
            </div>
        </body>
        </html>
        `;
        try {
            const newBill = new Bill(dataBill);

            newBill.dataProduct.map(async (item) => {
                const deleteCartById = await Cart.findByIdAndDelete(item.idCart);
            })

            await newBill.save();

            // Cập nhật trạng thái của các Cart thành "Đã sử dụng"
            // await Cart.updateMany(
            //     { '_id': { $in: idCart } },
            //     { $set: { status: 'Đã sử dụng' } }
            // );
        } catch (error) {
            console.error("Lỗi khi lưu hóa đơn:", error.message);
            return res.status(500).send("Đã xảy ra lỗi trong quá trình xử lý hóa đơn.");
        }
        return res.send(successPage);
    } else {
        const errorPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Giao Dịch Thất Bại</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    margin-top: 50px;
                }
                .message {
                    font-size: 24px;
                    color: red;
                }
                .button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #f44336;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    text-decoration: none;
                    font-size: 16px;
                }
                .button:hover {
                    background-color: #d32f2f;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Giao Dịch Thất Bại!</h1>
                <p class="message">Đã xảy ra lỗi trong quá trình xử lý giao dịch.</p>
            </div>
        </body>
        </html>
        `;
        return res.send(errorPage);
    }
});
router.get("/getbill/:idUser", async (req, res) => {
    try {
        const { idUser } = req.params;
        const { status } = req.query;
        // console.log("status", status);

        if (!idUser) {
            return res.status(400).json({ message: "idUser is required" });
        }

        if (!status) {
            return res.status(400).json({ message: "status is required" });
        }

        const bills = await Bill.find({ idUser: idUser, status })
            .populate({
                path: "idCart",
                populate: {
                    path: "idProduct",
                    // select: "name price description", 
                },
            })
            .populate("idAddress")
            .populate("idCoupon")


        if (!bills.length) {
            return res.status(404).json({ message: "Không có đơn hàng nào " });
        }


        return res.status(200).json({ bills: bills });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.put('/editStatusBill/:id', async (req, res) => {
    const billId = req.params.id;
    const { status } = req.body;
    console.log("Bill Id: " + billId);
    console.log("status " + status);

    if (!status) {
        return res.status(400).json({ message: 'Status is required.' });
    }

    try {

        const updatedBill = await Bill.findByIdAndUpdate(
            billId,
            { status },
            { new: true }
        );

        if (!updatedBill) {
            return res.status(404).json({ message: 'Bill not found.' });
        }

        return res.status(200).json({
            message: 'Bill status updated successfully.',
            bill: updatedBill
        });
    } catch (error) {
        console.error('Error updating bill status:', error.message);
        return res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = router;

