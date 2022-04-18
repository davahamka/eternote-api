const planControllers = require("../controllers/planControllers");

const router = require("express").Router();

router.get("/", planControllers.getPlans);
router.get("/:id", planControllers.getPlanById);
router.post("/", planControllers.createPlan);
router.put("/", planControllers.updatePlan);
router.delete("/", planControllers.deletePlan);

module.exports = router;
