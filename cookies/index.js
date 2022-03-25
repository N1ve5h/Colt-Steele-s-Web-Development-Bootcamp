const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send("Hey There");
})

app.get('/setname',  (req, res) => {
    res.cookie('name', 'steven smith');
    res.cookie('animal', 'elephant')
    res.send('Send you a cookie');
})

app.listen(3000, () => {
    console.log("Listening at port 3000");
})