const Card = require("../models/cardSchema");

const getCardsById = async (userId) => {
    return await Card.find({ owner: userId })
}

const createCard = async (userId, body) => {
    return await Card.create({ ...body, owner: userId })
}

const deleteCardById = async (cardId) => {
    return await Card.findOneAndDelete({ _id: cardId})
}

const editCardById = async (cardId, body) => {
    return await Card.findByIdAndUpdate({ _id: cardId }, body, { new: true })
}

const completeCard = async (cardId) => {
    return await Card.findByIdAndUpdate({_id: cardId},{status: 'Complete'})
}

module.exports = {
    getCardsById,
    createCard,
    deleteCardById,
    editCardById,
    completeCard
}