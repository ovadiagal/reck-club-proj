const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/webhook', (req, res) => {
  console.log("HELLO!");
  console.log(JSON.stringify(req));
  res.send(req.body.challenge);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});