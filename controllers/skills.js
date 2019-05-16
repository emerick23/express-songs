var Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

module.exports = {
    index,
    new: newSkill,
    create
}