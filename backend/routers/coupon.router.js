const express = require('express');
const Coupon = require('../model/coupon');

const router = express.Router();

router.get('/getAllCoupon', async (req, res) => {
    const {total} = req.query;
    console.log(total);
    
    const validCoupons = await Coupon.find({
        condition: { $lte: total },  
    });

    res.send(validCoupons);
})

module.exports = router;