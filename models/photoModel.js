const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
    name: String,
    categorie: String,
    date: String,
    image: String,
    miniature: String,
})

const photoModel = mongoose.model('photos', photoSchema)

module.exports = photoModel