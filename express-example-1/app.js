const express = require('express');

const app = express();

app.get('/', (req, res) => {
  //   console.log(req.url);
  //   console.log(req.method);
  //   console.log(req.headers);
  res.send('<h2>Contacts Page</h2>');
});

app.listen(3000, () => console.log('Server is Run...'));
