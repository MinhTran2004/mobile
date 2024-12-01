const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    discountType: { type: String, required: true },
    discountValue: { type: Number, required: true },
    maxDiscount: { type: Number, required: true },
    quantity: { type: Number, required: true },
    condition: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    describe: { type: String, required: true },
    status: { type: String, required: true },
}, {timestamps: true});

const Counpon = mongoose.model('Coupons', CouponSchema);

module.exports = Counpon;