const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Contacts Page</h2>');
  res.json({ message: 'Hello Node.js' });
});

app.listen(3000, () => console.log('Server is Run...'));
