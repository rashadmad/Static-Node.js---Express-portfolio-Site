const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//sets up a route for the project page and adds dynamic data to it
router.get('/', (req, res) => {
    res.locals.name = projects[0].project_name;
    res.locals.description = projects[0].project_description;
    res.locals.items = projects[0].technologies;
    res.locals.imageA = projects[0].image_urls[0];
    res.locals.imageB = projects[0].image_urls[1];
    res.locals.imageC = projects[0].image_urls[0];
    res.render('project');
});

module.exports = router;

