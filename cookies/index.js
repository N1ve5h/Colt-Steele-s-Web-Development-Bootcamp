const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet', (req, res) => {
    const {name = 'anonymous'} = req.cookies;
    res.send(`Hey there, ${name}`);
})

app.get('/setname',  (req, res) => {
    res.cookie('name', 'steven smith');
    res.cookie('animal', 'elephant')
    res.send('Send you a cookie');
})

app.listen(3000, () => {
    console.log("Listening at port 3000");
})