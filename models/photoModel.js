const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
    name: String,
    categorie: String,
    img: String,
    miniatures: String,
})

const photoModel = mongoose.model('photos', photoSchema)

module.exports = photoModel