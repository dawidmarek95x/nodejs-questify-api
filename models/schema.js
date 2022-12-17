const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


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

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
  }, 
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    token: {
        type: String,
        default: null
    },
  cards: [
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
        }
    },
  ],
}, {
    versionKey: false,
    timestamps: true
});

userSchema.methods.setPassword = function(password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(6));
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("Users", userSchema);

module.exports = User;