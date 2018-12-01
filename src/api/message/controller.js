
const Message = require('./model');
const Room = require('../room/model');
const User = require('../user/model');
const { NotFoundHttpException } = require('../../common/errors');

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
  .then(message => res.status(200).json(message))
  .catch(err => next(err));

module.exports = {
  create,
};
