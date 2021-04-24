let express = require('express');
let router = express.Router();
let commonDao = require('../common/CommonDao');
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

  let result = await commonDao.select("userMapper.selectList", req.query);
  res.json(result);

});

router.post('/', async (req, res, next) => {
  try {
    let emptyParam = getEmptyParams(
        ['user_id', 'user_name', 'user_pwd', 'user_tel_no']
        , req.body);

    if (emptyParam.length > 0) {
      next(`${emptyParam.join(',')} is mandantory`);
    } else {

      let result = await commonDao.fetch("userMapper.insert", req.body);

      res.json({result: result > 0 ? true : false});

    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;