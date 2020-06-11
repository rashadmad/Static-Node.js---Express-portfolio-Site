const express = require('express');
const app = express();
const port = 3000;

//tell the app to use pug
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
    res.send("<h1>I Love Treehouse!</h1>");
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))