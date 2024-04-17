const db = require('../config/db');

class Category {
  static create(name) {
    return db.execute('INSERT INTO categories (name) VALUES (?)', [name]);
  }

  static getAll() {
    return db.query('SELECT * FROM categories');
  }

  static update(id, name) {
    return db.execute('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM categories WHERE id = ?', [id]);
  }
}

module.exports = Category;
