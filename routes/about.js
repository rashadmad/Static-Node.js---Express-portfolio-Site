const express = require('express');
const router = express.Router();

//sets up a route for the about page
router.get('/', (req, res) => {
    res.render('about');
});

module.exports = router;