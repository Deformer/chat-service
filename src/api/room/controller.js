const { Room, Message, User } = require('database-module/models');
const { NotFoundHttpException } = require('errors-list/http-errors');

const list = (req, res, next) => Room.findAll()
  .then(rooms => res.status(200).send(rooms))
  .catch(err => next(err));

const messageList = (req, res, next) => Room.find({ where: { id: req.params.roomId } })
  .then((room) => {
    if (!room) {
      throw new NotFoundHttpException('Not found: room with specified identifier not found');
    }

    return Message.findAll({
      attributes: ['text'],
      where: { roomId: req.params.roomId },
      include: [{
        model: User,
        attributes: ['name', 'id'],
      }, {
        model: Room,
        attributes: ['title', 'id'],
      }],
    });
  })
  .then(messages => res.status(200).json(messages))
  .catch(err => next(err));


module.exports = {
  list,
  messageList,
};
