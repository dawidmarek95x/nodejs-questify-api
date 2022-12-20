const {
    getCardsByOwner,
    createNewCard,
    deleteExistingCard,
    editExistingCard,
} = require("../services/card");

const getAllUserCards = async (req, res, next) => {
    try {
        const { id: userId } = req.user;
        const cards = await getCardsByOwner(userId)
        res.status(200).json({
            status: "Successful operation",
            code: 200,
            cards
        })
    } catch (error) {
		next(error);
	}
}

const createCard = async (req, res, next) => {
	try {
		const { id: userId } = req.user;
		const createdCard  = await createNewCard(userId, req.body);
		res.status(201).json({
			status: "Successful operation",
			code: 201,
			createdCard
		});
	} catch (error) {
		next(error);
	}
};

const deleteCard = async (req, res, next) => {
	try {
		const { id: userId } = req.user;
		const { cardId  } = req.params
		await deleteExistingCard(userId, cardId);
		res.status(204).end();
	} catch (error) {
		next(error)
	}
};

const editCard = async (req, res, next) => {
	try {
		const { id: userId } = req.user;
		const { cardId } = req.params;
		const body  = req.body;
		const editedCard = await editExistingCard(userId, cardId, body);
		res.status(200).json({
			status: "Successful operation",
			code: 200,
			editedCard
		})
	} catch (error) {
		next(error)
	}
}

const changeCardStatusToCompleted  = async (req, res, next) => {
	try {
		const { id: userId } = req.user;
		const { cardId } = req.params;
		const editedCard  = await editExistingCard( userId, cardId, {status: "Complete"});
		res.status(200).json({
			status: "Successful operation",
			code: 200,
			editedCard
		})
	} catch (error) {
		next(error)
	}
}

module.exports = {
	getAllUserCards,
	createCard,
	deleteCard,
	editCard,
	changeCardStatusToCompleted 
};