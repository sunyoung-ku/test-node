require('dotenv').config();
const express = require('express');
const app = express();
const {PORT, DB_URL} = process.env;
const db = require('./common/db');
const _ = require('lodash');
const morgan = require('morgan');

//DEFINE ROUTER
const users = require('./router/users');

function error(err, req, res, next) {


  res.status(500);
  res.json({error: err.toString()});
}

// ROUTER
app.use(morgan('combined'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/user', users);

app.use((err, req, res, next) => {


  res.status(500);
  res.json({error: err.toString()});
});
app.listen(PORT, () => {

  console.log(`SERVER LISTENING ON ${PORT}`);
})
