require('dotenv').config();
const express = require('express');
const app = express();
const {PORT, DB_URL} = process.env;
const db = require('./common/db');
const _ = require('lodash');

//DEFINE ROUTER
const users = require('./router/users');

// ROUTER

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/user', users);


app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON ${PORT}`);
})
