const { Router } = require('express');

const userRoutes = require('./user');
const roomRoutes = require('./room');
const messageRoutes = require('./message');

const router = new Router();

router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
