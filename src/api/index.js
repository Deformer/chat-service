const { Router } = require('express');

const userRoutes = require('./user');
const roomRoutes = require('./room');

const router = new Router();

router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);

module.exports = router;
