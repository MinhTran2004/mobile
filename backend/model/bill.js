const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    account: { type: String, required: true },
    address: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        detailAddress: { type: String, required: true },
    },
    dataProduct: [{
        idProduct: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: String, required: true },
        quantityCart: { type: String, required: true },
    }],
    coupon: {
        _id: { type: String},
        disscount: { type: String }
    },
    paymentMethod: { type: String, required: true },
    transport: { type: String, required: true },
    totalCost: { type: String, required: true },
    createAt: { type: String, required: true },
    status: { type: String, required: true },
})

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;