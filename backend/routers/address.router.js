const express = require('express');
const Address = require('../model/address');

const router = express.Router();

router.post('/createAddress', async (req, res) => {
    const data = req.body;
    if (data.status) {
        await Address.updateMany({ status: true }, { $set: { status: false } });
        const address = await Address(data).save();
        if (address.lenght != 0) {
            res.send({ status: true });
        } else {
            res.send({ status: false });
        }
    } else {
        const address = await Address(data).save();
        if (address.lenght != 0) {
            res.send({ status: true });
        } else {
            res.send({ status: false });
        }
    }
})

router.get('/getAllAddress', async (req, res) => {
    const { idAccount } = req.query;
    const data = await Address.find({ idAccount: idAccount }).limit(10).sort({ status: -1 });
    if (data.length == 0) {
        res.send({ status: false })
    } else {
        res.send({ status: true, data: data });
    }
})

router.get(`/getAddressByIdAccount`, async (req, res) => {
    const { idAccount } = req.query;

    const reponse = await Address.find({ idAccount: idAccount, status: true });

    if (reponse.length != 0) {
        res.send({ status: true, address: reponse });
    } else {
        res.send({ status: false });
    }
})

router.put('/updateAddressById', async (req, res) => {
    const data = req.body;
    if (data.status) {
        await Address.updateMany({ status: true }, { $set: { status: false } });
        const reponse = await Address.findByIdAndUpdate(data._id, data);

        if (reponse.lenght != 0) {
            res.send({ status: true });
        } else {
            res.send({ status: false });
        }
    }
})

module.exports = router;