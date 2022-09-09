const express = require('express');
const cors = require('cors');

const productsRouter = require('./routes/api/products');

const app = express();

app.use(cors());
app.use('/api/products', productsRouter);

app.listen(3001, () => console.log('Server is Run...'));
