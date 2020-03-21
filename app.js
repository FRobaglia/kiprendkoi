const express = require('express');
const dotenv = require('dotenv').config();

const app = express();


app.get('/', function(req, res) {
  res.send('04 Rafraichissement automatique');
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));