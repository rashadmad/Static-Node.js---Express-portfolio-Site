const express = require('express');
const bodyParser = require('body-Parser');
const app = express();
const port = 3000;
const data = require('./data.json') 

//tell the app to use pug
app.set('view engine', 'pug');

//sets up the home route
app.get('/', (req, res) => {
    res.send('afsgsdfgs');
});

app.listen(port, () => console.log(`You app is up and running on http://localhost:${port}` + data))