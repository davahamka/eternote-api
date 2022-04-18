const userControllers = require("../controllers/userControllers");

const router = require("express").Router();

router.get("/", userControllers.getUsers);
router.post("/", userControllers.createUser);

module.exports = router;
