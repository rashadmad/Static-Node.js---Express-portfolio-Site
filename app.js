const express = require('express');
const bodyParser = require('body-Parser');
const app = express();
const port = 3000;

//tell the app to use pug
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
    res.send('afsgsdfgs');
});

app.listen(port, () => console.log(`You app is up and running on http://localhost:${port}`))