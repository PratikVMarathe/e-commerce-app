const Category = require('../models/Category');

class CategoryController {
  static async createCategory(req, res) {
    const { name } = req.body;
    try {
      await Category.create(name);
      res.send('Category created successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  static async getAllCategories(req, res) {
    try {
      const categories = await Category.getAll();
      res.json(categories[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  static async updateCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      await Category.update(id, name);
      res.send('Category updated successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  static async deleteCategory(req, res) {
    const { id } = req.params;
    try {
      await Category.delete(id);
      res.send('Category deleted successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = CategoryController;
