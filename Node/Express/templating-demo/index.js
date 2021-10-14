const express = require("express");
const { join } = require("path");
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(join(__dirname,'public')))

app.set('view engine', 'ejs');
app.set('views', join(__dirname,'/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cats', (req,res) =>{
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats', {cats})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', {subreddit})
    }
})

app.get('/rand', (req, res) => {
    const num = Math.round(Math.random()*10)+1;
    res.render('random',{ num } );
})

app.listen(8080, () => {
    console.log("Listening On Port 8080");
})