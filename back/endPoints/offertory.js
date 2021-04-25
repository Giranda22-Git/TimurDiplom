const express = require('express')
const router = express.Router()

const mongoOffertory = require('../models/offertory.js').offertorys

router.get('/newOffertory', async (req, res) => {
    const newOffertory = new mongoOffertory({
        Summ: 0
    })
    const result = await newOffertory.save()
    res.status(200).send( JSON.stringify( result ) )
})

router.get('/', async (req, res) => {
    try {
        const result = await mongoOffertory.findOne().exec()
        res.status(200).send(result)
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
})

router.post('/Pay', async (req, res) => {
    const data = req.body
    const result = await mongoOffertory.updateOne({ __v: 0 }, { $inc: { Summ: data.summ } })
    res.status(200).send(result)
})

module.exports = router