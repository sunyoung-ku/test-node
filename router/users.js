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

router.get('/', (req, res) => {

  commonDao.select("userMapper.selectList", req.query, (result) => {
    res.json(result);
  });

});

router.post('/', (req, res, next) => {


  let emptyParam = getEmptyParams(
      ['user_id', 'user_name', 'user_pwd', 'user_tel_no']
      , req.body);

  if (emptyParam.length > 0) {
    next(`${emptyParam.join(',')} is mandantory`);
  } else {
    commonDao.fetch("userMapper.insert", req.body, (err, result) => {
      if (err) {
        next(err);
      } else {
        console.log(result);
        res.json({result: result > 0 ? true : false});
      }

    });
  }

})
;

module.exports = router;