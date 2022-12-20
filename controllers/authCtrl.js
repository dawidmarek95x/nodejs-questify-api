const {
  findUserByEmail,
  createNewUser,
  updateUserToken,
} = require("../services/users");

const { getCardsByOwner } = require("../services/card");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET_KEY;

const registerUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await findUserByEmail(email);

    if (user) {
      return res.status(409).json({
        status: "Conflict",
        code: 409,
        message: "Provided email already exists",
      });
    }

    const newUser = await createNewUser(req.body);

    res.status(201).json({
      email: newUser.email,
      id: newUser.id,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    const isPasswordCorrect = await user?.validatePassword(password);

    if (!user || !isPasswordCorrect) {
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "Email doesn't exist / Password is wrong",
      });
    }

    const { _id: id } = user;
    const payload = {
      id,
      email,
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
    await updateUserToken(id, token);

    const cards = await getCardsByOwner(id);

    res.status(200).json({
      accessToken: token,
      userData: {
        email,
        id,
        cards,
      },
    });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  const { _id: id } = req.user;

  try {
    await updateUserToken(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
