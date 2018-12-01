const Joi = require('joi');

const messageSchema = Joi.object({
  text: Joi.string().required(),
  roomId: Joi.number().integer().required(),
});

module.exports = {
  messageSchema,
};
