// const date = new Date();

// console.log(date.getFullYear());
const fs = require('fs/promises');
// const fs = require('fs').promises;

const fileOperation = async (filePath, action = 'read', data = '') => {
  switch (action) {
    case 'read':
      const text = await fs.readFile(filePath, 'utf-8');
      console.log(text);
      break;
    case 'add':
      await fs.appendFile(filePath, data);
      break;
    case 'replace':
      await fs.writeFile(filePath, data);
      break;

    default:
      break;
  }
};

// fileOperation('files/file.txt');
// fileOperation('files/file.txt', 'add', '\n Wow I dont know that \n do');
fileOperation('files/file.txt', 'replace', '\nWow I dont know that\ndo');

// fs.readFile('files/file.txt', 'utf-8')
//   .then(data => {
//     console.log(data);
//     // const text = data.toString();
//     // console.log(text);
//   })
//   .catch(error => console.log(error.message));
