const User = require("../models/userSchema");

const findUserByEmail = async (email) => await User.findOne({ email });

const createNewUser = async (body) => {
	const { email, password } = body;
	const newUser = new User({ email });
	await newUser.setPassword(password);
	await newUser.save();
	return newUser;
};

const updateUserToken = async (id, token=null) =>
	await User.findByIdAndUpdate(id, { token });

module.exports = {
	createNewUser,
	updateUserToken,
	findUserByEmail,
};