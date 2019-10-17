var express = require('express');
var router = express.Router();
var songsCtrl = require('../controllers/songs')

router.get('/', songsCtrl.index)
router.get('/add', songsCtrl.addSongPage)
router.post('/', songsCtrl.postSong)
router.delete('/:idx', songsCtrl.deleteSong)

module.exports = router;
