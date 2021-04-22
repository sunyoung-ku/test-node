const db = require('./db');
const camelcaseKeys = require('camelcase-keys');
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper([
  'mapper/UserMapper.xml'
]);

module.exports = {

  select: function (queryID, sqlParam, processResult) {
    db.getConnection((conn) => {

      let format = {language: 'sql', indent: '  '};
      let queryIdArr = queryID.split('.')
      let query = mybatisMapper.getStatement(queryIdArr[0], queryIdArr[1], sqlParam,
          format);

      console.log(query);

      db.getConnection((conn) => {

        conn.query(query, (err, result, field) => {
          processResult(camelcaseKeys(result));
        });
        conn.release();
      });

    });
  },
  fetch : function (nameSpace, queryID, sqlParam, processResult) {
    db.getConnection((conn) => {

      let format = {language: 'sql', indent: '  '};
      let queryIdArr = queryID.split('.')
      let query = mybatisMapper.getStatement(queryIdArr[0], queryIdArr[1], sqlParam,
          format);

      console.log(query);

      db.getConnection((conn) => {
        conn.beginTransaction();
        conn.query(query, (err, result, field) => {
          if (err) {
            conn.rollback();
          }

          processResult(result);
          conn.commit();
        });

        conn.release();
      });

    });
  }
}