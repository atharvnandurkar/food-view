const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4: uuid } = require("uuid");

async function createFood(req, res) {

    // Because when we create middleware, we store the foodPartner info in req. headers.
    // console.log(req.foodPartner);

    // console.log(req.body);  
    // console.log(req.file);

    const fileUploadResult = await storageService.uploadFile(
        req.file.buffer,
        `${uuid()}.mp4`
    );

    // console.log(fileUploadResult);

    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    // res.send("food item created");

    res.status(201).json({
        message: "food created successfully",
        food: foodItem
    })

}

module.exports = {
    createFood,
}