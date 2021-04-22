let express = require('express');
let router = express.Router();
let commonDao = require('../common/CommonDao');
let _ = require('lodash');
router.get('/', (req, res) => {

  commonDao.select("userMapper.selectList", req.query, (result) => {
    res.json(result);
  });

});

router.post('/', (req, res, next) => {

  let validate = true;

  _.each(['user_id', 'user_name', 'user_pwd', 'user_tel_no'], (v) => {
    console.log(req.body[v]);
    if (_.isEmpty(req.body[v])) {
      next(new Error(`${v} is mandantory`));
      validate = false;
    }
  });

  if (validate) {
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