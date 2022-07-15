const mongoose = require('mongoose')

const presentationSchema = mongoose.Schema({
    photo: String,
    presentation: String,
    description: String,
})

const presentationModel = mongoose.model('presentations', presentationSchema)

module.exports = presentationModel