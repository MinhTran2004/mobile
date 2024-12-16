// Import các module cần thiết
const express = require('express');
const Favorite = require('../model/favorte'); 
const Product = require('../Model/product');
const Account = require('../model/account'); 

const router = express.Router();

// API thêm sản phẩm yêu thích
router.post('/', async (req, res) => {
    try {
        const { userId, productId } = req.body;

        const user = await Account.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User không tồn tại' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }
        const existingFavorite = await Favorite.findOne({ userId, productId });
        if (existingFavorite) {
            return res.status(400).json({ message: 'Sản phẩm đã có trong danh sách yêu thích' });
        }
        const favorite = new Favorite({ userId, productId });
        await favorite.save();

        res.status(201).json({ message: 'Thêm sản phẩm yêu thích thành công', favorite });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi máy chủ', error });
    }
});


router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await Account.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User không tồn tại' });
        }
        const favorites = await Favorite.find({ userId }).populate('productId');

        res.status(200).json({ message: 'Lấy danh sách sản phẩm yêu thích thành công', favorites });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi máy chủ', error });
    }
});

router.delete('/', async (req, res) => {
    try {
        const { userId, productId } = req.body;

        const user = await Account.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User không tồn tại' });
        }

        const favorite = await Favorite.findOneAndDelete({ userId, productId });
        if (!favorite) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại trong danh sách yêu thích' });
        }
        res.status(200).json({ message: 'Xóa sản phẩm yêu thích thành công' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi máy chủ', error });
    }
});
module.exports = router;