// User authentication routes.

const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();


/**
 * - POST 
 *  Create the new user. Register.
 */
router.post('/user/register', authController.registerUser);

module.exports = router;