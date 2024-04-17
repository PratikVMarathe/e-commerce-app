const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
