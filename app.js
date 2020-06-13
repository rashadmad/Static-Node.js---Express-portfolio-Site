const express = require('express');
const bodyParser = require('body-Parser');
const app = express();
const port = 3000;
const data = require('./data.json') 

//tell the app to use pug
app.set('view engine', 'pug');

//sets up the home route
app.get('/', (req, res) => {
    res.render('index');
});

//sets up a route for the about page
app.get('/about', (req, res) => {
    res.render('about');
});

//sets up a route for the project page and adds dynamic data to it
app.get('/project', (req, res) => {
    res.locals.name = "Rashad's project";
    res.locals.Description = "This is Rashad's project it is awesome";
    res.locals.items = ["HTML", "CSS","JavaScript"];
    res.render('project');
});

app.listen(port, () => console.log(`You app is up and running on http://localhost:${port}` + " " + data))