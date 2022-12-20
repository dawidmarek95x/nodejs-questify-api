const Card = require("../models/cardSchema");

const createNewCard = async (userId, body) =>
  await Card.create({ ...body, owner: userId });

const editExistingCard = async (userId, cardId, body) =>
  await Card.findOneAndUpdate(
    { owner: userId, _id: cardId },
    { $set: body },
    { new: true, runValidators: true, strict: "throw" }
  );

const deleteExistingCard = async (userId, cardId) =>
  await Card.findOneAndDelete({ owner: userId, _id: cardId });

const getCardsByOwner = async (userId) => await Card.find({ owner: userId }, { owner: 0 });

module.exports = {
  createNewCard,
  editExistingCard,
  deleteExistingCard,
  getCardsByOwner,
};
