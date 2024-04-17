const db = require('../config/db');

class Product {
  static create(name, categoryId) {
    return db.execute('INSERT INTO products (name, categoryId) VALUES (?, ?)', [name, categoryId]);
  }

  static getAll() {
    return db.query('SELECT p.id, p.name AS productName, c.id AS categoryId, c.name AS categoryName FROM products p JOIN categories c ON p.categoryId = c.id');
  }

  static update(id, name, categoryId) {
    return db.execute('UPDATE products SET name = ?, categoryId = ? WHERE id = ?', [name, categoryId, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM products WHERE id = ?', [id]);
  }

  static associateCategory(id, categoryId) {
    return db.execute('UPDATE Products SET categoryId = ? WHERE id = ?', [categoryId, id]);
  }

  static getAll(offset, pageSize) {
    return db.query('SELECT * FROM products LIMIT ?, ?', [offset, pageSize]);
  }
}

module.exports = Product;
