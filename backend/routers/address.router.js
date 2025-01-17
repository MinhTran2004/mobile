const express = require('express');
const Address = require('../model/address');

const router = express.Router();

router.post('/createAddress', async (req, res) => {
    const data = req.body;
    if (data.status) {
        await Address.updateMany({ idAccount: data.idAccount, status: true }, { $set: { status: false } });
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

router.delete('/deleteAddressById', async (req, res) => {
    const { idAddress } = req.query;

    const reponse = await Address.findByIdAndDelete(idAddress);
    console.log(reponse);

    if (reponse) {
        res.send({ status: true })
    } else {
        res.send({ status: false })
    }

})

router.put('/updateAddressById', async (req, res) => {
    const data = req.body;

    console.log(data);
    if (data.status) {
        await Address.updateMany({ idAccount: data.idAccount, status: true }, { $set: { status: false } });
        const reponse = await Address.findByIdAndUpdate(data._id, data);

        if (reponse.lenght != 0) {
            res.send({ status: true });
        } else {
            res.send({ status: false });
        }
    } else {
        const reponse = await Address.findByIdAndUpdate(data._id, data);
        console.log(reponse);

        if (reponse.lenght != 0) {
            res.send({ status: true });
        } else {
            res.send({ status: false });
        }
    }
});

router.patch('/updateStatusAddressById', async (req, res) => {
    const {idAddress, idAccount} = req.body;

    await Address.updateMany({ idAccount: idAccount, status: true }, { $set: { status: false } });
    const reponse = await Address.findByIdAndUpdate(idAddress, { status: true });

    if (reponse) {
        res.send({ status: true });
    } else {
        res.send({ status: false });
    }
});

module.exports = router;