const express = require('express');
const router4 = express.Router();
const connectDB = require('../db');
const GraphAnalysis = require('../Schema/GraphAnalysis')
connectDB();
router4.post('/graphAnalysis', async (req, res) => {
    console.log(req.body)
    const { userId,weeklyUrl, dailyUrl, monthlyUrl } = req.body;
    const graphAnalysis = new GraphAnalysis({userId, weeklyUrl, dailyUrl, monthlyUrl });
    
    await graphAnalysis.save(); +
        res.send("hello world....");
})
module.exports = router4;