const mysql = require('mysql2/promise')

async function getConnection() {
  try {
    const connection = await mysql.createConnection(
        {
          host    : "localhost",
          user    : "local",
          password: "1234",
          database: "test"
        }
    );
    return connection;
  } catch (e){
    throw new e;
  }
}

async function excuteQuery(sql) {
  const conn = await getConnection();
  try {
    console.log(`####################################################`)
    console.time('query execute time ');
    console.log(`excute query : \n${sql}`);

    const rtn  = await conn.query(
        sql
        , []
        , result => result);
    console.log('result : \n', rtn[0]);
    console.timeEnd('query execute time ');
    console.log(`####################################################`)
    return rtn[0];
  } catch (e) {
    throw new e;
  } finally {
    conn.end();
  }

}

module.exports.excute = excuteQuery;




