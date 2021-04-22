let express = require('express');
let router = express.Router();
let commonDao = require('../common/CommonDao');

router.get('/getUsers', (req, res) => {

  commonDao.select("userMapper.selectList",req.query,(result)=>{
    res.json(result);
  });

});

router.post('/user', (req, res) => {

});

module.exports = router;