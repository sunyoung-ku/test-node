const dao = require('./2.dao');

const run = async () => {
  try {
    const aUser = await dao.excute(`select 'aa' name from dual`);
    console.log(aUser);
    const userList = await dao.excute(
        `select * from  tb_user_mst where user_id ='${aUser[0].name}'`);
    const codeList = await dao.excute(`select * from tb_comm_code_mst`);

    console.log(`userList : ${userList}`);
    console.log(`codeList : ${codeList}`);
  }catch (e){
    console.error(e);
  }
}
run();