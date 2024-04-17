const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
