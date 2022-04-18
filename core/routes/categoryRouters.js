const PlanController = require("../controllers/PlanController");

const router = require("express").Router();

router.get("/", PlanController.getPlans);
router.get("/:id", PlanController.getPlanById);
router.post("/", PlanController.createPlan);
router.put("/", PlanController.updatePlan);
router.delete("/", PlanController.deletePlan);

module.exports = router;
