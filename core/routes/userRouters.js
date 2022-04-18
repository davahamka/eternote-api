const UserController = require("../controllers/UserController");

const router = require("express").Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);

module.exports = router;
