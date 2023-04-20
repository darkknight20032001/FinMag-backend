const express = require('express');
const router1 = express.Router();
const pool = require('../db');
console.log(pool);
router1.post('/', (req,res) => {
    console.log(req.body)

    res.send("hello world....");
    
})
module.exports = router1;