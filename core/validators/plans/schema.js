const Joi = require("joi");

// title: DataTypes.STRING,
// start_date: DataTypes.DATE,
// end_date: DataTypes.DATE,
// color: DataTypes.STRING,
// details: DataTypes.STRING,
// remind_before: DataTypes.INTEGER,
// is_finish: DataTypes.BOOLEAN,

const PlanPayloadSchema = Joi.object({
  title: Joi.string().required(),
});

module.exports = { PlanPayloadSchema };
