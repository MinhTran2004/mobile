const express = require('express');
const Account = require('../model/account');

const router = express.Router();

router.post('/createAccount', async (req, res) => {
    const data = req.body;
    const account = new Account(data);
    const reponse = await account.save();
    res.send(reponse);
})

router.get('/checkLogin', async (req, res) => {
    const data = req.query;
    const account = await Account.findOne(data);
    res.send(account)
})

module.exports = router;