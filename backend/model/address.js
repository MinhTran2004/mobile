const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    idAccount: {type:String, required: true},
    name: {type:String, required: true},
    phone: {type:String, required: true},
    province: {type:String, required: true},
    district: {type:String, required: true},
    commune: {type:String, required: true},
    detailAddress: {type:String, required: true},
    status: {type:Boolean, required: true},
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;