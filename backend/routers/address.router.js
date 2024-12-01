const express = require('express');
const Address = require('../model/address');

const router = express.Router();

router.post('createAddress', async(req, res) => {
    const data = req.body;

    console.log(data);
    
})



module.exports = router;