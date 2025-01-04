const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    sold: { type: String, required: true },
    describe: { type: String, required: true },
    status: { type: String, required: true },
    createAt: { type: String, require: true },
});

const Product = mongoose.model('Products', ProductSchema);


module.exports = Product;