const JWT_SECRET = require('dotenv').config();
const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {

    const { fullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    // If user already exists.
    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exists"
        })
    }

    // Hash the password.
    const hashPassword = await bcrypt.hash(password, 9);

    // Create User.
    const user = await userModel.create({
        fullName,
        email,
        password: hashPassword
    });

    // Create Token.
    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET);

    // Store the token in cookie.
    res.cookie("token", token);

    // Response to the frontend.
    res.status(201).json({
        message: "User registerd successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}


async function loginUser(req, res) {

    const { email, password } = req.body;

    const user = await userModel.findOne({
        email
    });

    if (!user) {
        res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        res.status(400).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "User loggged in successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}

module.exports = {
    registerUser,
    loginUser
}