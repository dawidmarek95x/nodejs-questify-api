const express = require("express");
const router = express.Router();

const apiDocsRouter = require("./api-docs");
const usersRouter = require("./auth");
const contactsRouter = require("./card");

router.use('/api-docs', apiDocsRouter);
router.use("/auth", usersRouter);
router.use("/card", contactsRouter);

module.exports = router;