const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    idAccount: { type: String, required: true },
    idProduct: { type: String, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, required: true },
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;