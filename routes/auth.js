const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const validation =  require("../middlewares/registerValidation");
const authMiddleware = require("../middlewares/jwt");

router.post("/register", validation.registerValidation, registerController.registerUser);
router.post("/login", validation.registerValidation, registerController.loginUser);
router.get("/logout", authMiddleware, registerController.logoutUser);

module.exports = router;