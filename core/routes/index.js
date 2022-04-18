const router = require("express").Router();
const userRouters = require("./userRouters");
const planRouters = require("./planRouters");

router.use("/users", userRouters);
router.use("/plans", planRouters);

module.exports = router;
