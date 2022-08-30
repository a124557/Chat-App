const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');

//Func for registering user
const registerUser = asyncHandler(async (req,res) => {
    const {name, email, password, pic} = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please complete all fields");
    }

    const userFound = await User.findOne({email});

    if(userFound) {
        res.status(400);
        throw new Error("A user associated with this email address already exists.")
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    /*If a user is sucessfully created, we send a sucess message and a token that
    is generated to validate their credentials*/
    if(user) {
        res.status(201).send("User sucessfully created.");
        res.json({
            token: generateToken(Useuserr._id),
        })
    } else {
        res.status(400);
        throw new Error("Unable to create new user.");
    }




})

module.exports = {registerUser};