const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send*"Sorry not an Admin"
})

router.get('/topsecret', (req, res) => {
    res.send("This is top secret");
})

router.get('/deleteall', (req,res) => {
    res.send("Ok Deleted Everything");
})

module.exports = router;