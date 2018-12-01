
const Room = require('./model');
const Message = require('../message/model');
const { NotFoundHttpException } = require('../../common/errors');

const list = (req, res, next) => Room.findAll()
  .then(rooms => res.status(200).send(rooms))
  .catch(err => next(err));

const messageList = (req, res, next) => Room.find({ where: { id: req.params.roomId } })
  .then((room) => {
    if (!room) {
      throw new NotFoundHttpException('Not found: room with specified identifier not found');
    }

    return Message.findAll({
      where: { roomId: req.params.roomId },
      include: ['user', 'room'],
    });
  })
  .then(messages => res.status(200).json(messages)) // TODO Don't send passhashes
  .catch(err => next(err));

module.exports = {
  list,
  messageList,
};