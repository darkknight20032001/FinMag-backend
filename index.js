const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const router1 = require('./Routers/router1');
app.use('/', router1)
app.listen(3001, () => { console.log('Listening on 3001') })















