# E-commerce-app
It's simple nodejs, angular and MySQL project

## Project setup

### Node.js Server
```
npm install
npm init -y
npm install express mysql2 body-parser cors
node server.js
```

### Angular Client
```
npm install
```
### Database (MySQL)
- create database:  **`nimap-app`**
- create tablels: **`categories`** and **`products`**
- Ensure that the **`Products`** table has a foreign key **`categoryId`** referencing the **`id`** in the **`Categories`** table to establish the one-to-many relationship.

Run **`ng serve`** for a dev server. Navigate to `http://localhost:8081/`.
