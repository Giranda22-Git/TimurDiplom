const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')

const mongoNews = require('../models/news.js').mongoNews

const tmpDir = __dirname + '/tmp/'
const uploadDir = __dirname + '/tmp/'
const upload = multer({dest: './endPoints/tmp/'})

// начало; получение всех новостей
router.get('/', async (req, res) => {
    const result = await mongoNews.find().exec()
    res.status(200).send( JSON.stringify(result) )
})
// конец; получение всех новостей


// начало; получение картинки по id новости
router.get('/load/:nid', async (req, res) => {
    const resNews = await mongoNews.findById(req.params.nid)
    res.sendFile(resNews.image)
})
// конец; получение картинки по id новости


// начало; создание новости
router.post('/', upload.single('file'), async (req, res) => {
    try {
        const data = req.body

        const image = req.file

        let imageString = null

        fs.renameSync(tmpDir + image.filename, uploadDir + 'image' + image.originalname)
        imageString = uploadDir + 'image' + image.originalname
        const newNews = new mongoNews({
            title: data.title,
            description: data.description,
            image: imageString,
        })
        const result = await newNews.save()
        const imagePath = 'http://localhost:3000/news/load/' + result._id
        await mongoNews.updateOne({ title: data.title }, { imagePath: imagePath })
        res.status(200).send( JSON.stringify( result ) )
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
})
// конец; создание новости


// удаление новости

module.exports = router