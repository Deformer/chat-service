const Joi = require('joi');

const messageListSchema = Joi.object({
  roomId: Joi.number().integer().required(),
});

module.exports = {
  messageListSchema,
};
