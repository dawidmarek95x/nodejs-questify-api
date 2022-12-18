const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require("../controllers/authCtrl");
const { validateUser } =  require("../middlewares/userValidation");
const authenticateUser = require("../middlewares/authenticateUser");

router.post("/register", validateUser, registerUser);
router.post("/login", validateUser, loginUser);
router.post("/logout", authenticateUser, logoutUser);

module.exports = router;