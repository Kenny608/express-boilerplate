var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({message: 'Whats going on?'});
});

module.exports = router;
