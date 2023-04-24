const express = require('express');
const router3 = express.Router();
const connectDB = require('../db');
const Dashboard = require('../Schema/Dashboard')
connectDB();
router3.post('/dashboard', async (req, res) => {
    console.log(req.body)
    const { userId, graphUrl, addExpense } = req.body;
    const dashboard = new Dashboard({ userId, graphUrl, addExpense });
    await dashboard.save();
    res.send("hello world profile saved....");
})
module.exports = router3;