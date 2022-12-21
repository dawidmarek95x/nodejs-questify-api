const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authenticateUser");
const { validateUser } = require("../middlewares/userValidation");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authCtrl");

router.post("/register", validateUser, registerUser);
router.post("/login", validateUser, loginUser);
router.post("/logout", authenticateUser, logoutUser);

module.exports = router;
