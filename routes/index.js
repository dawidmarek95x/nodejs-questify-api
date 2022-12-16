const express = require("express");
const router = express.Router();

const usersRouter = require("./auth");
const contactsRouter = require("./card");

router.use("/auth", usersRouter);
router.use("/card", contactsRouter);

module.exports = router;