const express = require('express');
const app = express();
const connectDB = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

connectDB();

const router1 = require('./Routers/router1');
const router2 = require('./Routers/router2');
const router3 = require('./Routers/router3');
const router4 = require('./Routers/router4');
const router5 = require('./Routers/router5');

app.use('/', router1);
app.use('/', router2);
app.use('/', router3);
app.use('/', router4);
app.use('/', router5);

app.listen(3001, () => { console.log('Listening on 3001') })















