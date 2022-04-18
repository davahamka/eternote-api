const PlanController = require("../controllers/PlanController");

const router = require("express").Router();

router.get("/", PlanController.getPlans);
router.get("/:id", PlanController.getPlanById);
router.post("/", PlanController.createPlan);
router.put("/:id", PlanController.updatePlan);
router.delete("/:id", PlanController.deletePlan);

module.exports = router;
