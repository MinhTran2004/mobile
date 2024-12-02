const express = require('express');
const Address = require('../model/address');

const router = express.Router();

router.post('/createAddress', async (req, res) => {
    const data = req.body;

    const address = await Address(data).save();

    if (address.lenght != 0) {
        res.send({ status: true });
    } else {
        res.send({ status: false });
    }
})

router.get('/getAllAddressById/:idAccount', async (req, res) => {
    const { idAccount } = req.params;

    const data = await Address.find({ idAccount: idAccount }).limit(10);
    console.log(data);

    if (data.length == 0) {
        
        res.send({ status: false })
    } else {
        res.send({ status: true, data: data });
    }
})


module.exports = router;