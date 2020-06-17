const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//sets up the home route
router.get('/', (req, res, next) => {
    res.locals.projects = projects;
    res.render('index');
});

module.exports = router;
