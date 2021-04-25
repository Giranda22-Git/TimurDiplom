const express = require('express')
const router = express.Router()

const mongoUser = require('../models/User.js').mongoUser
const Login = require('../objects/Login.js')

router.get('/', async (req, res) => {
    const result = await mongoUser.find().exec()
    res.status(200).send( JSON.stringify(result) )
})

router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newUser = new mongoUser({
            Login: new Login(data.login),
            Password: data.password
        })
        const result = await newUser.save()
        res.status(200).send( JSON.stringify( result ) )
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
})

router.post('/autorization', async (req, res) => {
    try {
        const user = await mongoUser.findOne({'Login._login': req.body.login}).exec()
        if (user.Password !== req.body.password) res.sendStatus(500)
        res.status(200).send(user)
    }
    catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router