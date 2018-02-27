require('dotenv').config();

const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use('/', proxy('https://api.deezer.com'));
app.listen(process.env.PORT || 8001);
