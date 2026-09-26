const userModel = require("../models/user.model");
const foodPartnerModel = require('../models/foodpartner.model');
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
    const hashedPassword = await bcrypt.hash(password, 9);

    // Create User.
    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
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

async function logoutUser(req, res) {

    // Clear the token from cookie.
    res.clearCookie("token");
    res.status(200).json({
        message: "User logeed out successfully"
    })
}

async function registerFoodPartner(req, res) {

    const { name, email, password } = req.body;

    const isAccountAlreadyExists = await foodPartnerModel.findOne({
        email
    });

    if (isAccountAlreadyExists) {
        return res.status(400).json({
            message: "Food partner account already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 9);

    const foodPartner = await foodPartnerModel.create({
        name,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "Food partner registered successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name
        }
    });
}

async function loginFoodPartner(req, res) {

    const { email, password } = req.body;

    const foodPartner = await foodPartnerModel.findOne({
        email
    })

    if (!foodPartner) {
        return res.status(400).json({
            message: "Invalid email OR password"
        })
    }

    const isPasswordValid = bcrypt.compare(password, foodPartner.password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email OR password"
        })
    }

    const token = jwt.sign({
        id: foodPartner._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    return res.status(201).json({
        message: "Food partner logged in successfully",
        foodPartner: {
            id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name
        }
    })
}

async function logoutFoodPartner(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "Food partner logged out successfully"
    });
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner,
}