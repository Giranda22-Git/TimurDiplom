const mongoose = require('mongoose')
const offertory = new mongoose.Schema({
    Summ: {
        type: Number,
        require: true,
        default: 0
    }
})

const offertorys = mongoose.model('offertory', offertory)
module.exports = { offertorys }