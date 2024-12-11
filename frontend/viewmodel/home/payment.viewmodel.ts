import { Address } from "@/model/address.model"
import BillModel from "@/model/bill.model";
import { Coupon } from "@/model/coupon.model";
import AddressService from "@/service/address.service";
import SeviceBill from "@/service/bill.service";
import { GetDay } from "@/utils/GetDay";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ViewModelPayment = () => {
    const navigation = useNavigation();
    const [address, setAddress] = useState<Address[]>([]);
    const [detailAddress, setDetailAddress] = useState("")
    const [checkBox, setCheckBox] = useState(true);
    const [dialog, setDialog] = useState(false);
    const [payment, setPayment] = useState('Thanh toán trực tiếp');

    const idAccount = useSelector((state: any) => state.auth.account._id)

    const getAddressByIdAccount = async () => {
        const reponse = await AddressService.getAddressByIdAccount(idAccount);
        if (reponse.length != 0) {
            setDetailAddress(reponse[0].province + ", " + reponse[0].district + ", " + reponse[0].commune + "," + reponse[0].detailAddress);
            setAddress(reponse);
        } else {
            setAddress(reponse);
        }
    }

    useEffect(() => {
        getAddressByIdAccount();
    }, [detailAddress])

    const createPaymentURL = async (dataCart: any, total: string, coupon?: Coupon) => {
        const dataAddress = {
            name: address[0].name,
            phone: address[0].phone,
            detailAddress: detailAddress,
        };

        const dataCoupon = {
            _id: coupon?._id ?? "",
            disscount: coupon?.discountValue ?? "",
        }

        const dataProduct = dataCart.map((item: any) => {
            return { quantityCart: item.quantityCart, idProduct: item._id, name: item.name, category: item.idCategory ?? item.category, image: item.image, price: item.price };
        })


        const dataBill = new BillModel(idAccount, dataProduct, payment, '30000', dataAddress, dataCoupon, total, GetDay(), 'Chờ xác nhận');
        
        const reponse = await SeviceBill.createPaymentURL(dataBill);

        if (reponse.vnpUrl && typeof reponse.vnpUrl === "string") {
            console.log("response createPaymentURL", reponse);
            navigation.navigate("ScreenWebView", { url: reponse.vnpUrl });
        } else {
            console.log("Không nhận được URL hợp lệ");
        }


    }



    return {
        address, detailAddress, checkBox, dialog, payment,
        setCheckBox, setDialog, setPayment, createPaymentURL,
    }
}

export default ViewModelPayment;