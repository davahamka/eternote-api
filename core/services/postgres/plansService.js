const models = require("../../models");

module.exports = {
  insertPlan: async ({
    title,
    start_date,
    end_date,
    color,
    details,
    remind_before,
    is_finish,
  }) => {
    const newPlan = await models.Plan.create({
      title,
      start_date,
      end_date,
      color,
      details,
      remind_before,
      is_finish,
    });
    return newPlan;
  },

  findAllPlans: async () => {
    const plans = await models.Plan.findAll();
    return plans;
  },

  findPlanById: async (id) => {
    const plan = await models.Plan.findAll({
      where: {
        id,
      },
    });
    return plan;
  },

  editPlan: async (id, data) => {
    const plan = await models.Plan.update(data, {
      where: {
        id,
      }
    });
    return plan;
  },

  removePlan: async (id) => {
    const plan = await models.Plan.destroy({
      where: {
        id,
      },
    });
    return plan;
  },
};
