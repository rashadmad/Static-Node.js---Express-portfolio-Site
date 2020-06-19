const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//sets up a route for the project page and adds dynamic data to it
router.get('/:id', (req, res) => {
    res.locals.name = projects[req.params.id].project_name;
    res.locals.description = projects[req.params.id].description;
    res.locals.items = projects[req.params.id].technologies;
    res.locals.imageA = projects[req.params.id].image_urls[2];
    res.locals.imageB = projects[req.params.id].image_urls[1];
    res.locals.imageC = projects[req.params.id].image_urls[0];
    res.locals.liveUrl = projects[req.params.id].live_link;
    res.locals.githubUrl = projects[req.params.id].github_link;
    res.render('project');
});

module.exports = router;

