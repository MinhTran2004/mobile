const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    username: {type:String, required: true},
    account: {type:String, required: true},
    password: {type:String, required: true},
    image: {type:String,default:'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg'},
    role: {type:String, required: true},
    status: {type:String, required: true},
},{
    timestamps:true
})

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;