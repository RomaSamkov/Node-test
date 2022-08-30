const productsOperations = require('./products');

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case 'getAll':
      const products = await productsOperations.getAll();
      console.log(products);
      break;

    default:
      break;
  }
};

invokeAction({ action: 'getAll' });
