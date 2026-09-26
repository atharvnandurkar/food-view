const foodPartnerModel = require('../models/foodpartner.model');
const jwt = require('jsonwebtoken');

async function authFoodPartnerMiddleware(req, res, next) {

    // when food-partner register then token will be saved in cookies.
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please login first"
        })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Here you get foodPartner deatils. by finding id.
        const foodPartner = await foodPartnerModel.findById(decoded.id);

        // Here we are creating new property in req. i.e. foodPartner
        // and us propery ki value decide is foodPartner. foodPartner ke data req.foodPartner me save karenge.
        req.foodPartner = foodPartner;

        next();  // Ye middleware ke band ke controllers ke pass logic chala jayega.

    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }

}

module.exports = {
    authFoodPartnerMiddleware,
}