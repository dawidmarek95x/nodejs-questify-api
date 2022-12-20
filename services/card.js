const Card = require("../models/cardSchema");

const getCardsByOwner = async (userId) => await Card.find({ owner: userId });

const createNewCard = async (userId, body) =>
  await Card.create({ ...body, owner: userId });

const deleteExistingCard = async (userId, cardId) =>
  await Card.findOneAndDelete({ owner: userId, _id: cardId });

const editExistingCard = async (userId, cardId, body) =>
  await Card.findByIdAndUpdate(
    { owner: userId, _id: cardId },
    { $set: body },
    { new: true, runValidators: true, strict: "throw" }
  );

module.exports = {
  getCardsByOwner,
  createNewCard,
  deleteExistingCard,
  editExistingCard,
};
