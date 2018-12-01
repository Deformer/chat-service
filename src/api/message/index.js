const { Router } = require('express');
const validator = require('express-joi-validation')({
  passError: true,
});

const { checkAuth } = require('../../services/auth');
const { create } = require('./controller');
const { messageSchema } = require('./validationSchema');


const router = new Router();

router.post('/',
  checkAuth,
  validator.body(messageSchema),
  create);


module.exports = router;
