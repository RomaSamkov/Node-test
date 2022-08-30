const fs = require('fs/promises');

const getAll = async () => {
  const products = fs.readFile(`${__dirname}/products.json`);
  return products;
};

module.exports = getAll;
