var Song = require('../models/song')

function index(req, res) {
    Song.find({}, function(err, songs) {
        res.render('songs/index', {songs})
    })
}

function addSongPage(req, res) {
    res.render('songs/new')
}

function postSong(req, res) {
    req.body.favorite = !!req.body.favorite
    req.body.genres = req.body.genres.replace(/\s*,\s*/g, ',');
    req.body.genres = req.body.genres.split(',')
    var song = new Song(req.body)
    song.save(function(err) {
        if (err) return res.render('skills/new')
        console.log(song)
        res.redirect('/songs')
    })
}

function deleteSong(req, res) {
    Song.findByIdAndDelete(req.params.idx, function(err, song) {
        song.save(function(err) {
            if (err) return console.log(err)
            res.redirect('/songs')
        })
    })
}

module.exports = {
    index,
    addSongPage,
    postSong,
    deleteSong
}