var mongoose = require('mongoose')
var Schema = mongoose.Schema

var songSchema = new Schema({
    name: String,
    artist: String,
    genres: [String],
    favorite: Boolean
})

module.exports = mongoose.model('Song', songSchema)