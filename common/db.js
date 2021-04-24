const mysql= require('mysql2/promise')
const config = require('../common/db_config.json');

let pool = mysql.createPool(config);


async function getConnection(){
  const connection = await pool.getConnection(async conn => conn);

  return connection;
}


module.exports.getConnection =  getConnection;


