const InvariantError = require("../../exceptions/InvariantError");
const { PlanPayloadSchema } = require("./schema");

const PlansValidator = {
  validatePlanPayload: (payload) => {
    const validationResult = PlanPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = PlansValidator;
