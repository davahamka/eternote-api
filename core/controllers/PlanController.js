const {
  findAllPlans,
  insertPlan,
  findPlanById,
  removePlan,
  editPlan,
} = require("../services/postgres/PlansService");
const PlansValidator = require("../validators/plans");
const NotFoundError = require("../exceptions/NotFoundError");

module.exports = {
  getPlans: async (req, res) => {
    const plans = await findAllPlans();

    res.send({
      message: "success",
      data: plans,
    });
  },

  getPlanById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const plan = await findPlanById(id);

      res.send({
        message: "success",
        data: plan,
      });
    } catch (err) {
      next(err);
    }
  },

  createPlan: async (req, res, next) => {
    try {
      PlansValidator.validatePlanPayload(req.body);

      const newPlan = await insertPlan(req.body);

      res.send({
        message: `Plan with id ${newPlan.id} successfully created`,
        data: newPlan,
      });
    } catch (err) {
      next(err);
    }
  },

  deletePlan: async (req, res, next) => {
    try {
      const { id } = req.params;

      const deletedPlan = await findPlanById(id);

      if (deletedPlan.length <= 0) {
        throw new NotFoundError("Data tidak ditemukan");
      }

      await removePlan(id);

      res.send({
        message: "Plan successfully deleted",
      });
    } catch (err) {
      next(err);
    }
  },

  updatePlan: async (req, res, next) => {
    try {
      const { id } = req.params;

      const plan = await findPlanById(id);

      if (plan.length <= 0) {
        throw new NotFoundError("Data tidak ditemukan");
      }

      const updatePlan = await editPlan(id, req.body);

      console.log(updatePlan)

      res.send({
        message: "Plan successfully updated",
      });
    } catch (err) {
      next(err);
    }
  },
};
