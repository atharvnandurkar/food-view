const express = require('express');
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();
const multer = require('multer');

// For File format. Server pe upload kar diya hai.
const upload = multer({
    storage: multer.memoryStorage(),
})

/* POST /api/food/  [protected]  */
// Food item can be add by only food provider.
router.post("/", 
    authMiddleware.authFoodPartnerMiddleware,
    upload.single("video"),  // Yaha video likha mean jo bhi frontend ke andar likha hoga vahi yaha pe "" double quote me likha hoga.
    foodController.createFood);

module.exports = router;