const mongoose = require('mongoose')
const news = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        default: ''
    }
})

const mongoNews = mongoose.model('news', news)
module.exports = { mongoNews }