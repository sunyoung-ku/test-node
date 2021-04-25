let express = require('express');
let router = express.Router();

router.get('/', async (req, res) => {

  res.render('home.html');

});

module.exports = router;