var express = require('express');
var router = express.Router();

/* GET users listing. */

const {msj} = require ('../controllers/usersControllers');

router
  .get('/mensaje', msj)

module.exports = router;
