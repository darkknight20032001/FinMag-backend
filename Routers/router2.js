const express = require('express');
const router2 = express.Router();
const connectDB = require('../db');
const Profile = require('../Schema/Profile')

connectDB();
router2.post('/profile', async (req, res) => {
    console.log(req.body)
    const { userId,dob, salary, salaryExcluded, profilePic, notifyMe } = req.body;
    const profile = new Profile({ userId, dob, salary, salaryExcluded, profilePic, notifyMe });

    await profile.save();
    res.send("hello world profile saved....");
})
module.exports = router2;