const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Enums
const CardDifficulty = ["Easy", "Normal", "Hard"];
const CardStatus = ["Incomplete", "Complete"];
const CardType = ["Task", "Challenge"];
const CardCategory = [
  "Stuff",
  "Family",
  "Health",
  "Learning",
  "Leisure",
  "Work",
];

const cardSchema = new Schema(
  {
    title: {
      type: String,
      min: 2,
      max: 100,
      required: [true, "Set title for card"],
    },
    difficulty: {
      type: String,
      enum: CardDifficulty,
      default: "Normal",
    },
    date: {
      type: String,
      required: [true, "Set date for card"],
    },
    time: {
      type: String,
      required: [true, "Set time for card"],
    },
    status: {
      type: String,
      enum: CardStatus,
      default: "Incomplete",
    },
    category: {
      type: String,
      enum: CardCategory,
      default: "Stuff",
    },
    type: {
      type: String,
      enum: CardType,
      default: "Task",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, strict: "throw" }
);

const Card = model("card", cardSchema);

module.exports = Card;
