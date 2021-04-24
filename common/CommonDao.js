const db = require('./db');
const camelcaseKeys = require('camelcase-keys');
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper([
  'mapper/UserMapper.xml'
]);
const format = {language: 'sql', indent: '  '};

module.exports = {

  select: async function (queryID, sqlParam) {
    let conn = await db.getConnection(conn => conn);
    try {

      let queryIdArr = queryID.split('.')
      let query = mybatisMapper.getStatement(queryIdArr[0], queryIdArr[1],
          sqlParam, format);

      console.log('query  : ', query);
      let result = await conn.query(query, sqlParam, result => result);
      console.log('rtn length : ', result[0].length);
      conn.release();
      return camelcaseKeys(result[0]);
    } catch (e) {
      throw e;
    } finally {

    }
  },
  fetch : async function (queryID, sqlParam) {
    let conn = await db.getConnection(conn => conn);

    try {

      let queryIdArr = queryID.split('.')

      let query = mybatisMapper.getStatement(queryIdArr[0], queryIdArr[1], sqlParam, format);
      console.log('query  : ', query);
      let result = await conn.query(query, sqlParam, result => result);
      console.log(result);
      console.log('affectedRows : ', result[0].affectedRows);

      return result[0].affectedRows;
    } catch (e) {
      conn.rollback();
      throw e;
    } finally {
      conn.release();
    }
  }
}