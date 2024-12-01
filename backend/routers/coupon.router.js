const express = require('express');
const Coupon = require('../model/coupon');

const router = express.Router();

router.get('/getAllCoupon', async (req, res) => {
    const data = await Coupon.find();
    res.send(data);
})

module.exports = router;