const express = require('express');
const bodyParser = require('body-Parser');
const app = express();
const port = 3000;
const data = require('./data.json');

//add all elements from the public dir
app.use('/static', express.static('public'));
app.use(express.static('images'));

//import image files
app.use("/images", express.static("images")); 

//tell the app to use pug
app.set('view engine', 'pug');

//sets up the home route
app.get('/', (req, res, next) => {
    res.render('index');
});

//sets up a route for the about page
app.get('/about', (req, res) => {
    res.render('about');
});

//sets up a route for the project page and adds dynamic data to it
app.get('/project', (req, res) => {
    res.locals.name = data.projects[0].project_name;
    res.locals.description = data.projects[0].project_description;
    res.locals.items = data.projects[0].technologies;
    res.locals.imageA = data.projects[0].image_urls[0];
    res.locals.imageB = data.projects[0].image_urls[1];
    res.locals.imageC = data.projects[0].image_urls[0];
    res.render('project');
});

//404 error 
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

//error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(500)
    res.render('error');
})

app.listen(port, () => console.log(`You app is up and running on http://localhost:${port}` + " " + data))