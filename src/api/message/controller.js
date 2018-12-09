const { Message, Room, User } = require('database-module/models');
const { NotFoundHttpException } = require('errors-list/http-errors');

const { sendMessageToRoom } = require('../../services/message-sender');

const create = (req, res, next) => Room.find({ where: { id: req.body.roomId } })
  .then((room) => {
    if (!room) {
      throw new NotFoundHttpException('Not found: room not found');
    }

    const messagePayload = Object.assign({}, req.body, { userId: req.session.userId });
    return Message.create(messagePayload);
  })
  .then(({ id }) => Message.find({
    attributes: ['text'],
    where: { id },
    include: [{
      model: User,
      attributes: ['name', 'id'],
    }, {
      model: Room,
      attributes: ['title', 'id'],
    }],
  }))
  .then((message) => {
    sendMessageToRoom(message);
    res.status(201).json(message);
  })
  .catch(err => next(err));

module.exports = {
  create,
};
