let express = require('express');
let router = express.Router();
let commonDao = require('../common/CommonDao');
const userService = require('../service/UserService');
let _ = require('lodash');

const getEmptyParams = (list, param) => {
  return _.filter(list, v => {
    return _.isEmpty(param[v]);
  }).reduce((arr, cur) => {
    arr.push(cur);
    return arr;
  }, []);
};

router.get('/', async (req, res) => {

  let result = await userService.getUserList(req.query);
  res.json(result);

});

router.post('/', async (req, res, next) => {
  try {
    
    let emptyParam = getEmptyParams(
        ['user_id', 'user_name', 'user_pwd', 'user_tel_no']
        , req.body);

    if (emptyParam.length > 0) {
      throw new Error(`${emptyParam.join(',')} is mandantory`);
    } else {

      let userCount = await userService.getUserList( {user_id:req.body.user_id});

      if(userCount.length >0){
        throw new Error(`already registed`);
      }

      let result = await userService.insert( req.body);
      console.log(result);
      res.json({result: result > 0 ? true : false});

    }
  } catch (e) {
    next(e);
  }
});

router.delete('/', async (req, res, next) => {
  try {

    let emptyParam = getEmptyParams(
        ['user_id']
        , req.body);

    if (emptyParam.length > 0) {
      throw new Error(`${emptyParam.join(',')} is mandantory`);
    } else {

      let result = await userService.delete( req.body);
      console.log(result);
      res.json({result: result > 0 ? true : false});

    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;