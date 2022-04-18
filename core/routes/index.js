const router = require("express").Router();
const userRouters = require("./userRouters");
const planRouters = require("./planRouters");
const authRouters = require("./authRouters");

router.use("/users", userRouters);
router.use("/plans", planRouters);
router.use("/auth", authRouters);

module.exports = router;
