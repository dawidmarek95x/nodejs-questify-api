const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authenticateUser");
const { validateCreationOrEditing } = require("../middlewares/cardValidation");

const {
  createCard,
  editCard,
  deleteCard,
  getAllUserCards,
  changeCardStatusToCompleted,
} = require("../controllers/cardCtrl");

router.post("/", authenticateUser, validateCreationOrEditing, createCard);
router.patch("/:cardId", authenticateUser, validateCreationOrEditing, editCard);
router.delete("/:cardId", authenticateUser, deleteCard);
router.get("/", authenticateUser, getAllUserCards);
router.patch(
  "/complete/:cardId",
  authenticateUser,
  changeCardStatusToCompleted
);

module.exports = router;
