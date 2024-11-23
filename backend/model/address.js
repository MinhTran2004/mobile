const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    idUser: {type:String, required: true},
    province: {type:String, required: true},
    district: {type:String, required: true},
    commune: {type:String, required: true},
    detail: {type:String, required: true},
    status: {type:String, required: true},
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;