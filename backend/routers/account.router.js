const express = require('express');
const Account = require('../model/account');

const router = express.Router();

router.post('/createAccount', async (req, res) => {
    const { account } = req.body;
    const data = req.body;
    const check = await Account.find({ account: account });
    
    if (check.length != 0) {
        res.send({ status: false });
    } else {
        const account = new Account(data);
        const reponse = await account.save();
        res.send({ status: true, reponse})
    }
})


router.get('/checkLogin', async (req, res) => {
    const data = req.query;
    console.log(data);
    const account = await Account.findOne(data);
    res.send(account)
})

module.exports = router;