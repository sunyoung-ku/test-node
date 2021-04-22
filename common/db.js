const mysql= require('mysql2')
const config = require('../common/db_config.json');

let pool = mysql.createPool(config);



module.exports.getConnection=  (callback) =>{
  pool.getConnection(function (err,connection){
    if(err){
      console.log(err);
    }
    callback(connection);
  });
}


