var mongoose = require('mongoose')
var Schema = mongoose.Schema

var songSchema = new Schema({
    name: String,
    artist: String,
    genres: [],
    favorite: Boolean
})

module.exports = mongoose.model('Song', songSchema)