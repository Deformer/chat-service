const { Router } = require('express');
const validator = require('express-joi-validation')({
  passError: true,
});

const { list, messageList } = require('./controller');
const { messageListSchema } = require('./validationSchema');

const router = new Router();

router.get('/',
  list);

router.get('/:roomId/messages',
  validator.params(messageListSchema),
  messageList);

module.exports = router;
