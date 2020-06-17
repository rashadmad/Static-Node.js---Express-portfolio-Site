const express = require('express');
const router = express.Router();
const data = require('../data.json');

//sets up a route for the project page and adds dynamic data to it
router.get('/', (req, res) => {
    res.locals.name = data.projects[0].project_name;
    res.locals.description = data.projects[0].project_description;
    res.locals.items = data.projects[0].technologies;
    res.locals.imageA = data.projects[0].image_urls[0];
    res.locals.imageB = data.projects[0].image_urls[1];
    res.locals.imageC = data.projects[0].image_urls[0];
    res.render('project');
});

module.exports = router;

