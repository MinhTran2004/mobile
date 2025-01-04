const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    account: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
    createAt: { type: String, required: true },
})

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;