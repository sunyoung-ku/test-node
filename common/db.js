const mysql= require('mysql2/promise')
const config = require('../common/db_config.json');

let pool = mysql.createPool(config);


module.exports.getConnection = async () => {
  const connection = await pool.getConnection();
  return connection;
};


