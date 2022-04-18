const AuthController = require("../controllers/AuthController");
const authMiddleware = require("../middlewares/auth-middleware");

const router = require("express").Router();

router.post("/login", AuthController.loginAuth);
router.get("/check", authMiddleware.isAuthenticated, AuthController.checkAuth);

module.exports = router;
