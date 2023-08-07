const mongoose = require('mongoose');
const {use} = require("express/lib/router");

const newsSchema = new mongoose.Schema({
    text: String,
    imgUrl: String
});

module.exports = mongoose.model('News', newsSchema)
