const express = require('express');
const router1 = express.Router();
const connectDB = require('../db');
const User = require('../Schema/User')
connectDB();
router1.post('/', async (req, res) => {
    console.log(req.body)
    const { email, password, firstName, lastName } = req.body;
    const user = new User({ email, password, firstName, lastName });
    user.userId = user?.email.replace('@gmail.com', '');
    await user.save();+
    res.send("hello world....");
})
module.exports = router1;