const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('pwa'));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'Page d\'accueil' });
});

app.get('/party/:id', function(req, res) {
  axios
  .get(`${process.env.API_URL}/party/${req.params.id}`)
  .then(({ data }) =>
    res.render('party', {
      party: data,
      title: data.name,
      url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
    }),
  )
  .catch((err) => console.log(err));
});

app.post('/party', function(req, res) {
  axios
  .post(`${process.env.API_URL}/party`, req.body)
  .then(({ data }) => res.redirect(`/party/${data._id}`))
  .catch((err) => res.send(err));
});

app.post('/addComment/:partyId', function(req, res) {
  axios
  .post(`${process.env.API_URL}/party/${req.params.partyId}/items`, req.body)
  .then(({ data }) => res.redirect(`/party/${req.params.partyId}`))
  .catch((err) => res.send(err));
});

app.post('/deleteComment/:partyId/:commentId', function(req, res) {
  axios
  .delete(`${process.env.API_URL}/party/${req.params.partyId}/items/${req.params.commentId}`, req.body)
  .then(({ data }) => res.redirect(`/party/${req.params.partyId}`))
  .catch((err) => res.send(err));
});



app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));