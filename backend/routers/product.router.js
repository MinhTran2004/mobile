const express = require('express');
const Product = require('../Model/product');
const removeAccents = require('remove-accents');
const Fuse = require('fuse.js');

const router = express.Router();

router.get('/getAllProductByLimit', async (req, res) => {
    const limit = req.query.limit;
    
    const product = await Product.find().limit(30);
    res.send(product);
})

router.get('/getProductById', async (req, res) => {
    const id = req.query;
    const product = await Product.findById(id);
    res.send(product);
})

router.get('/getProductByName', async (req, res) => {
    const { name } = req.query; 

    try {
        if (!name) {
            return res.status(400).send({
                message: 'Please provide a product name to search',
            });
        }

        // Lấy tất cả sản phẩm từ cơ sở dữ liệu
        const products = await Product.find();

        // Loại bỏ dấu tiếng Việt và chuẩn hóa từ khóa tìm kiếm
        const normalizedName = removeAccents(name).toLocaleLowerCase();

        // Chuẩn hóa tên sản phẩm trong cơ sở dữ liệu (Loại bỏ dấu tiếng Việt)
        const normalizedProducts = products.map(product => {
            return {
                ...product.toObject(), // Convert từ Document MongoDB thành Object thông thường
                normalizedName: removeAccents(product.name).toLocaleLowerCase(), // Chuẩn hóa tên sản phẩm
            };
        });

        // Cấu hình Fuse.js cho tìm kiếm gần đúng
        const fuse = new Fuse(normalizedProducts, {
            keys: ['normalizedName'], // Tìm kiếm trong trường 'normalizedName' đã được chuẩn hóa
            includeScore: true, // Bao gồm điểm tương đồng trong kết quả tìm kiếm
            threshold: 0.3, // Ngưỡng tương đồng, giá trị thấp hơn cho kết quả gần đúng cao hơn
            shouldSort: true, // Sắp xếp kết quả theo độ tương đồng
        });

        // Thực hiện tìm kiếm gần đúng
        const result = fuse.search(normalizedName);

        // Trả về các sản phẩm tìm được
        const response = result.map(item => item.item);

        console.log(response); // Kiểm tra kết quả trong console

        res.status(200).send({
            message: 'success',
            products: response, // Trả về các sản phẩm đã tìm thấy
        });
    } catch (error) {
        console.error("Error searching products:", error);
        res.status(500).send({
            message: 'Error searching products',
            error: error.message
        });
    }
});


router.get('/getProductByCategory', async (req, res) => {
    const { idCategory } = req.query; // Lấy giá trị idCategory từ query string

    try {
        if (!idCategory) {
            return res.status(400).send({
                message: 'Please provide a category ID to search',
            });
        }

        const products = await Product.find({ idCategory: { $regex: idCategory, $options: 'i' } });
        
        res.status(200).send({
            message: 'success',
            products: products,
        });
    } catch (error) {
        console.error("Error fetching products by category:", error);
        res.status(500).send({
            message: 'Error fetching products by category',
            error: error.message,
        });
    }
});

module.exports = router;