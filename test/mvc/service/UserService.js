const dao = require('../dao/dao');

module.exports = {
  getUserList: async (user) => {
    try {
      const userList = await dao.selectList(`userMapper.selectList`, user);user
      return userList;
    } catch (e) {
      throw e;
    }
  },
  insert : async (user)  =>{
     try {
       const insertRows = await dao.insert(`userMapper.insert`, user);
       return insertRows;
     } catch (e) {
        throw e;
     }
  }
}