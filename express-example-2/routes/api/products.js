const express = require('express');

const products = require('../../data/products');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: products,
    },
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = products.find(item => item._id === id);
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
});

module.exports = router;
