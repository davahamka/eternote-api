const Joi = require("joi");

const UserPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string(),
});

module.exports = { UserPayloadSchema };
