const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/webhook', (req, res) => {
  // Handle the webhook request here
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});