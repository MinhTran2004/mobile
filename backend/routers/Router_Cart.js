const express = require('express');
const Cart = require('../model/cart');

const router = express.Router();

router.post('/addProductToCart', async (req, res) => {
    const data = req.body;
    const cart = await new Cart(data).save();
    res.send(cart);
})

router.get('/getAllProductInCart', async (req, res) => {
    const limit = req.query.limit;
    const data = await Cart.find().limit(limit);
    res.send(data);
})

router.patch('/updateQuantityById', async (req, res) => {
    const { id, quantity } = req.body;
    const cart = await Cart.findByIdAndUpdate(id, { quantity: quantity });

    res.send(cart)
})

router.delete('/deleteProductFromCart/:id', async (req, res) => {
    const { id } = req.params;
    const cart = await Cart.findByIdAndDelete(id);
    res.send(cart);
});

module.exports = router;