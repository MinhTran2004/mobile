const express = require('express');
const Cart = require('../model/cart');

const router = express.Router();

router.post('/addProductToCart', async (req, res) => {
    const data = req.body;
    const { idProduct, quantity } = req.body;
    const reponse = await Cart.find({ idProduct: idProduct, idAccount: data.idAccount });

    if (reponse.length != 0) {
        const reponse = await Cart.findByIdAndUpdate(reponse[0]._id, { quantity: reponse[0].quantity + quantity })
        if (reponse) {
            res.send({ status: true });
        } else {
            res.send({ status: false });
        }
    } else {
        const reponse = await new Cart(data).save();
        if (reponse) {
            res.send({ status: true });
        } else {
            res.send({ status: false });
        }
    }
})

router.get('/getAllProductInCart', async (req, res) => {
    const data = req.query;
    const reponse = await Cart.find({ idAccount: data.idAccount }).limit(data.limit);
    res.send(reponse);
})

router.get('/getCartById', async (req, res) => {
    const id = req.query;
    const reponse = await Cart.findById(id);
    res.send(reponse);
})

router.patch('/updateQuantityById', async (req, res) => {
    const { id, quantity } = req.body;
    const cart = await Cart.findByIdAndUpdate(id, { quantity: quantity });
    res.send(cart)
})

router.delete('/deleteCartById/:id', async (req, res) => {
    const { id } = req.params;
    const reponse = await Cart.findByIdAndDelete(id);

    if (reponse != null) {
        res.send({ status: true })
    } else {
        res.send({ status: false });
    }
});

module.exports = router;