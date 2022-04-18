const Joi = require("joi");

const UserPayloadSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
});

module.exports = { UserPayloadSchema };
