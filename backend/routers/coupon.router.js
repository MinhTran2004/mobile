const express = require('express');
const Coupon = require('../model/coupon');

const router = express.Router();

router.get('/getAllCouponByPrice', async (req, res) => {
    const {total} = req.query;
    
    const validCoupons = await Coupon.find({
        $expr: { $lte: [{ $toDouble: "$condition" }, Number(total)] } // Chuyển cả giá trị condition và total thành số
    });

    res.send(validCoupons);
})

router.get('/getAllCoupon', async (req, res) => {
    const validCoupons = await Coupon.find();

    res.send(validCoupons);
})

module.exports = router;