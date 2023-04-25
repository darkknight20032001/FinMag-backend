const express = require('express');
const router5 = express.Router();
const connectDB = require('../db');

const SetGoals = require('../Schema/setGoals');
connectDB();
router5.post('/setGoals', async (req, res) => {
    console.log(req.body)
    const { userId, weeklyGoals, dailyGoals, monthlyGoals } = req.body;
    const setGoals = new SetGoals({ userId, weeklyGoals, dailyGoals, monthlyGoals });

    await setGoals.save();
    res.send("hello world....");
})
module.exports = router5;