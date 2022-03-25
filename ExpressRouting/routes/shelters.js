const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("All Shelters");
})

router.post('/', (req, res) => {
    res.send("Create Shelters");
})

router.get('/:id', (req, res) => {
    res.send("Details of one Shelter");
})

router.get('/:id/edit', (req,res) => {
    res.send("Editing one shelter");
})

module.exports = router;