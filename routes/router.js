const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    console.log("SERVER: Login Page");
    res.render('login.hbs')
})

router.get('/timeline', (req, res) => {
    console.log("SERVER: Timeline Page");
    res.render('timeline.hbs')
})

module.exports = router;