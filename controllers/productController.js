const Product = require('../models/Product');

class ProductController {
  static async createProduct(req, res) {
    const { name, categoryId } = req.body;
    try {
      await Product.create(name, categoryId);
      res.send('Product created successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  static async getAllProducts(req, res) {
    try {
      const products = await Product.getAll();
      res.json(products[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  static async updateProduct(req, res) {
    const { id } = req.params;
    const { name, categoryId } = req.body;
    try {
      await Product.update(id, name, categoryId);
      res.send('Product updated successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      await Product.delete(id);
      res.send('Product deleted successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  static async associateProductCategory(req, res) {
    const { id, categoryId } = req.params;
    try {
      await Product.associateCategory(id, categoryId);
      res.send('Product associated with category successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = ProductController;
