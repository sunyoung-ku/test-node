const mysql = require('mysql2/promise')
const camelcaseKeys = require('camelcase-keys');
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper([
  '../mapper/UserMapper.xml'
]);
const format = {language: 'sql', indent: '  '};
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

async function selectList(queryID,sqlParam) {
  const conn = await getConnection();
  try {

    console.log('#############################################################');
    console.time('query execute time ');

    let queryIdArr = queryID.split('.')
    let query = mybatisMapper.getStatement(queryIdArr[0], queryIdArr[1],
        sqlParam, format);

    console.log(`excute query : \n${query}`);



    const rtn  = await conn.query(
        query
        , []
        , result => result);
    console.log('result : \n', rtn[0]);
    console.timeEnd('query execute time ');
    console.log('#############################################################');
    return rtn[0];
  } catch (e) {
    throw new e;
  } finally {
    conn.end();
  }

}

async function insert(queryID,sqlParam) {
  const conn = await getConnection();
  try {
    console.log(`####################################################`)
    console.time('query execute time ');

    let queryIdArr = queryID.split('.')
    let query = mybatisMapper.getStatement(queryIdArr[0], queryIdArr[1],
        sqlParam, format);

    console.log(`excute query : \n${query}`);

    const rtn  = await conn.query(
        query
        , []
        , result => result);
    console.log('result : \n', result[0].affectedRows);
    console.timeEnd('query execute time ');
    console.log(`####################################################`)
    return result[0].affectedRows;
  } catch (e) {
    throw new e;
  } finally {
    conn.end();
  }

}

module.exports.selectList = selectList;
module.exports.insert = insert;




