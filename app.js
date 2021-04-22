require('dotenv').config();
const express = require('express');
const app = express();
const {PORT, DB_URL} = process.env;
const db = require('./common/db');
const _ = require('lodash');
var bodyParser = require('body-parser');
//DEFINE ROUTER
const users = require('./router/users');

function error(err, req, res, next) {

  console.error(err.stack);
  res.status(500);
  res.json({error: err.toString()});
}

// ROUTER

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/user', users);

app.use(error);
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON ${PORT}`);
})
