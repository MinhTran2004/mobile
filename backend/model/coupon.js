const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    discountValue: { type: String, required: true },
    quantity: { type: String, required: true },
    condition: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    describe: { type: String, required: true },
    status: { type: String, required: true },
    createAt: { type: String, required: true },
});

const Counpon = mongoose.model('Coupons', CouponSchema);

module.exports = Counpon;