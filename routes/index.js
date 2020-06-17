const express = require('express');
const router = express.Router();
const data = require('../data.json');

//sets up the home route
router.get('/', (req, res, next) => {
    res.locals.projects = data.projects;
    res.render('index');
});

module.exports = router;
