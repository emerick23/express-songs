const skills = [
    {skill: 'html'},
    {skill: 'css'},
    {skill: 'js'},
    {skill: 'node.js'},
];

module.exports = {
    getAll,
    create
};

function getAll() {
    return skills;
}

function create(skill) {
    skills.push(skill);
}