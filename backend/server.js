const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const categoriesRoutes = require('./routes/categories');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Routes
app.use('/api/categories', categoriesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
