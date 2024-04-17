const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);
// Associate a product with a category
router.put('/:id/categories/:categoryId', ProductController.associateProductCategory);

module.exports = router;
