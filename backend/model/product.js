const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    idCategory: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    discount: { type: String, required: true },
    image: { type: String, required: true },
    sold: { type: String, required: true },
    quantity: { type: String, required: true },
    rate: { type: String, required: true },
    describe: { type: String, required: true },
    status: { type: String, required: true },
}, {timestamps: true});

const Product = mongoose.model('Products', ProductSchema);


module.exports = Product;