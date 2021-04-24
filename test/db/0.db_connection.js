const mysql = require('mysql2')
const connection = mysql.createConnection(
                                     {
                                              host    : "localhost",
                                              user    : "local",
                                              password: "1234",
                                              database: "test"
                                            }
                                          );
connection.connect();
connection.query(
               `select 'a' 
                          from dual`
                   , []
                   , (err, result) => {
                    if (err) {
                      console.log(err)
                    } else {
                      console.log(result);

                    }
                });
connection.end();


