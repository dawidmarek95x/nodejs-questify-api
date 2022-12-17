const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Enums

const CardDifficulty = ['Easy', 'Normal', 'Hard']
const CardStatus = ['Incomplete', 'Complete']
const CardType = ['Task', 'Challenge']
const CardCategory = [
"Stuff",
"Family",
"Health",
"Learning",
"Leisure",
"Work"
]

// Schema

const cardSchema = new Schema(
  {
          title: {
            type: String,
            min: 2,
            max: 100
          },
          difficulty: {
              type: String,
              enum: CardDifficulty,
              default: 'Normal'
      },
          date: {
              type: String
          },
          time: {
              type: String
          },
          status: {
              type: String,
              enum: CardStatus,
              default: 'Incomplete'
          },
          category: {
              type: String,
              enum: CardCategory,
              default: 'Stuff'
          },
          type: {
              type: String,
              enum: CardType,
              default: 'Task'
          },
          owner: {
              type: Schema.Types.ObjectId,
              ref: "users",
              required: true,
          },
  },
  {
    versionKey: false,
    timestamps: true
  }
);



const Card = mongoose.model("cards", cardSchema);

module.exports = Card;