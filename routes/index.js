var express = require('express');
var router = express.Router();

const {index, validation, controlRegister} = require ('../controllers/mainControllers')
const validacion = require ('../validation/validation')

/* GET home page. */

router
  .get('/', index)
  .post('/validacion',validacion, controlRegister)

module.exports = router;
