// Create the server in this file.
// This file is only about creating the server. 

const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());
app.use(cookieParser());

// APIs
app.use('/api/auth', authRoutes);

module.exports = app;