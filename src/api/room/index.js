const { Router } = require('express');
const validator = require('express-joi-validation')({
  passError: true,
});

const { list, messageList } = require('./controller');

const router = new Router();

router.get('/',
  list);

router.get('/:roomId/messages',
  messageList);

module.exports = router;
