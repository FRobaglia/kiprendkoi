const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'Page d\'accueil' });
});

app.post('/party', function(req, res) {
  console.log(req.body);
  res.send('Post ok!');
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));