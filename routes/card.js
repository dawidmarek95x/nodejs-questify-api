const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authenticateUser");
const { validateCreateCard } = require("../middlewares/cardValidation");

const {
	getAllUserCards,
	addNewCard,
	removeCard,
	editCard,
	completeCard
} = require("../controllers/cardCtrl");


router.post('/', authenticateUser, addNewCard)
router.get('/', authenticateUser, getAllUserCards)
router.patch('/:id', authenticateUser, editCard)
router.delete('/:id', authenticateUser, removeCard)
router.patch('/complete/:id', authenticateUser, completeCard)

module.exports = router;