const express = require('express');
const Product = require('../Model/product');

const router = express.Router();

router.get('/getAllProductByLimit', async (req, res) => {
    const limit = req.query.limit;
    
    const offset = (limit - 1) * 10; 
    console.log(offset);
    
    const product = await Product.find().skip(offset).limit(10);
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
      
        const products = await Product.find({
            name: { $regex: name, $options: 'i' }  
        });

        res.status(200).send({
            message: 'success',
            products: products,
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