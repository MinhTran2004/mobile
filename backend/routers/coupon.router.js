const express = require('express');
const Coupon = require('../model/coupon');

const router = express.Router();

router.get('/getAllCoupon', async (req, res) => {
    const {total} = req.query;
    
    const validCoupons = await Coupon.find({
        $expr: { $lte: [{ $toDouble: "$condition" }, Number(total)] } // Chuyển cả giá trị condition và total thành số
    });

    res.send(validCoupons);
})

module.exports = router;