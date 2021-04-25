const dao = require('../common/CommonDao');

module.exports = {
  getUserList: async (user) => {
    try {
      console.log('call service');
      const userList = await dao.select(`userMapper.selectList`, user);user
      return userList;
    } catch (e) {
      throw e;
    }
  },
  insert : async (user)  =>{
     try {
       const insertRows = await dao.fetch(`userMapper.insert`, user);
       return insertRows;
     } catch (e) {
        throw e;
     }
  },
  delete : async (user) =>{
    try {
      const insertRows = await dao.fetch(`userMapper.delete`, user);
      return insertRows;
    } catch (e) {
      throw e;
    }
  }
}