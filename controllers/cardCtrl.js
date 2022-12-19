const service = require("../services/card");

const getAllUserCards = async (req, res, next) => {
    try {
        const { id } = req.user
        const userCards = await service.getCardsById(id)
        res.status(201).json({
            status: "Successful operation",
            code: 201,
            cards: userCards
        })
    } catch (error) {
		next(error);
	}
}


const addNewCard = async (req, res, next) => {
	try {
		const { id } = req.user;
	
		const newCard = await service.createCard(id, req.body);
		res.status(201).json({
			status: "Successful operation",
			code: 201,
			createdCard: newCard
		});
	} catch (error) {
		next(error);
	}
};

const removeCard = async (req, res, next) => {
	try {
		const { id } = req.params
		const deleteCard = await service.deleteCardById(id);
		res.status(204).json({
			status: "Successful operation",
			code: 204,
			message: "Card removed"
		})
	} catch (error) {
		next(error)
	}
};

const editCard = async (req, res, next) => {
	try {
		const { id } = req.params;
		const body  = req.body;
		const editCard = await service.editCardById(id, body);
		res.status(200).json({
			status: "Successful operation",
			code: 200,
			editedCard: editCard
		})
	} catch (error) {
		next(error)
	}
}

const completeCard = async (req, res, next) => {
	try {
		const { id } = req.params;
		const completedCard = await service.completeCard(id);
		res.status(200).json({
			status: "Successful operation",
			code: 200,
			editedCard: completedCard
		})
	} catch (error) {
		next(error)
	}
}
module.exports = {
	getAllUserCards,
	addNewCard,
	removeCard,
	editCard,
	completeCard
};