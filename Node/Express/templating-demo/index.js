const express = require("express");
const { join } = require("path");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', join(__dirname,'/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) => {
    const num = Math.round(Math.random()*10)+1;
    res.render('random',{ num } );
})

app.listen(8080, () => {
    console.log("Listening On Port 8080");
})