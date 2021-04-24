const db = require('../common/db');


async function dbTest(queryID, sqlParam) {
 let conn = await db.getConnection();
 let rtn = await conn.query(`select * from tb_user_mst`,[], result => result[0]);
 console.log(JSON.stringify(rtn[0]));
}

console.log('a');
dbTest();
console.log('b');