const { Router } = require('express');

const roomRoutes = require('./room');
const messageRoutes = require('./message');

const router = new Router();

router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
