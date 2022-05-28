const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    console.log("SERVER: Login Page");
    res.send("Login Page");
})

router.get('/home', (req, res) => {
    console.log("SERVER: Home Page");
    res.send("Home Page");
})

module.exports = router;