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

//brings in my routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
const aboutRoutes = require('./routes/about');

app.use(mainRoutes);
app.use('/project', projectRoutes);
app.use('/about', aboutRoutes);

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