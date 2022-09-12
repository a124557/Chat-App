const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const generateToken = require("../configuration/token");

//Func for registering user
const registerUser = asyncHandler(async (req, res) => {
  var { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please complete all fields");
  }

  const userFound = await User.findOne({ email });

  if (userFound) {
    res.status(400);
    throw new Error(
      "A user associated with this email address already exists."
    );
  }

  var user = await User.create({
    name,
    email,
    password,
    pic,
  });

  /*If a user is sucessfully created, we send a sucess message and a token that
    is generated to validate their credentials*/
  if (user) {
    res.status(201).json({
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Unable to create new user.");
  }
});

const authenticateUser = asyncHandler(async (req, res) => {
  var { email, password } = req.body;

  //Find the user in mongoDB
  var user = await User.findOne({ email });

  //Check if user exists in database and passwords match
  if (user && (await User.matchPassword(password))) {
    res.json({
      name: user.name,
      email: user.email,
    });
  } else {
    res.send("Password incorrect or user not found");
  }
});

module.exports = { registerUser, authenticateUser };
