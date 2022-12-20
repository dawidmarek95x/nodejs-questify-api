const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authenticateUser");
const { validateCreationOrEditing } = require("../middlewares/cardValidation");

const {
  getAllUserCards,
  createCard,
  deleteCard,
  editCard,
  changeCardStatusToCompleted,
} = require("../controllers/cardCtrl");

router.post("/", authenticateUser, validateCreationOrEditing, createCard);
router.get("/", authenticateUser, getAllUserCards);
router.patch("/:cardId", authenticateUser, validateCreationOrEditing, editCard);
router.delete("/:cardId", authenticateUser, deleteCard);
router.patch(
  "/complete/:cardId",
  authenticateUser,
  changeCardStatusToCompleted
);

module.exports = router;
