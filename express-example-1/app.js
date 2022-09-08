const express = require('express');
const fs = require('fs/promises');
const moment = require('moment');

const products = require('./products');

const app = express();

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format('DD-MM-YYYY_hh:mm:ss');
  await fs.appendFile('server.log', `${method} ${url} ${date}`);
  next();
});

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });
// app.use((req, res, next) => {
//   console.log('Second middleware');
//   next();
// });

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => console.log('Server is Run...'));
