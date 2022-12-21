const {
  createNewCard,
  editExistingCard,
  deleteExistingCard,
  getCardsByOwner,
} = require("../services/card");

const createCard = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const createdCard = await createNewCard(userId, req.body);
    res.status(201).json({
      createdCard: {
        title: createdCard.title,
        difficulty: createdCard.difficulty,
        category: createdCard.category,
        date: createdCard.date,
        time: createdCard.time,
        status: createdCard.status,
        type: createdCard.type,
        _id: createdCard._id,
      },
    });
  } catch (error) {
    next(error);
  }
};

const editCard = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { cardId } = req.params;
    const body = req.body;
    const editedCard = await editExistingCard(userId, cardId, body);
    res.status(200).json({
      editedCard: {
        title: editedCard.title,
        difficulty: editedCard.difficulty,
        category: editedCard.category,
        date: editedCard.date,
        time: editedCard.time,
        status: editedCard.status,
        type: editedCard.type,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteCard = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { cardId } = req.params;
    await deleteExistingCard(userId, cardId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getAllUserCards = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const cards = await getCardsByOwner(userId);
    res.status(200).json({
      cards,
    });
  } catch (error) {
    next(error);
  }
};

const changeCardStatusToCompleted = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { cardId } = req.params;
    const editedCard = await editExistingCard(userId, cardId, {
      status: "Complete",
    });
    res.status(200).json({
      editedCard: {
        title: editedCard.title,
        difficulty: editedCard.difficulty,
        category: editedCard.category,
        date: editedCard.date,
        time: editedCard.time,
        status: editedCard.status,
        type: editedCard.type,
        _id: editedCard._id,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUserCards,
  createCard,
  deleteCard,
  editCard,
  changeCardStatusToCompleted,
};
