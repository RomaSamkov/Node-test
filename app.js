const productsOperations = require('./products');

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case 'getAll':
      const products = await productsOperations.getAll();
      console.log(products);
      break;
    case 'getById':
      const product = await productsOperations.getById(id);
      if (!product) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(product);
      break;
    case 'add':
      const newProduct = await productsOperations.add(data);
      console.log(newProduct);
      break;
    case 'updateById':
      const updateProduct = await productsOperations.updateById(id, data);
      if (!updateProduct) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(updateProduct);
      break;

    default:
      console.log('Unknown action');
      break;
  }
};

// invokeAction({ action: 'getAll' });
// const id = '48bd1cd8-72ca-42cc-8457-156bb8c30873';
// invokeAction({ action: 'getById', id });

const newData = {
  name: 'Iphone',
  price: 34,
};
// invokeAction({ action: 'add', data: newData });

const updateId = 'a1b32917-d9d6-40d0-869d-5cb678c6e849';

const updateData = {
  name: 'Iphone',
  price: 36,
};

invokeAction({ action: 'updateById', id: updateId, data: updateData });
