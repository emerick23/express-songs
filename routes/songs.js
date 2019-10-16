var express = require('express');
var router = express.Router();
var songsCtrl = require('../controllers/songs')

router.get('/', songsCtrl.index)

module.exports = router;
