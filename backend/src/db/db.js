// In this file we create the db connection with server.

const mongoose = require('mongoose');

function connectDb() {
    mongoose.connect("mongodb://localhost:27017/food-view")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection err", err);
    })
}

module.exports = connectDb;