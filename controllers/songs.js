var Song = require('../models/song')

function index(req, res) {
    res.render('songs/index')
}

module.exports = {
    index,
}