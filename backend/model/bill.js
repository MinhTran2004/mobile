const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // có 
    idCart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cart" }], // có 
    idDelivery :{ type: String, required: false}, // có 
    idAddress: { type: mongoose.Schema.Types.ObjectId, ref: "Address" }, // có 
    idCoupon: { type: mongoose.Schema.Types.ObjectId, ref: "Coupon" , required: false }, // có 
    totalCost: { type: Number, required: true },// có 
    paymentMethod: { type: String, required: true }, // có 
    status: { type: String, required: true }, // có 
}, {
    timestamps: true
})

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;