const mongoose = require('mongoose')
const users = new mongoose.Schema({
    Login: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
})

const mongoUser = mongoose.model('users', users)
module.exports = { mongoUser }