const express = require('express');
require('./db/mongoose.js');
const public = require('./routers/public');
const path = require('path');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');

const publicDir = path.join(__dirname, '../public');
const viewDir = path.join(__dirname, '../templates/views');
const partialsDir = path.join(__dirname, '../templates/partials');

const app = express();

app.use(express.json(), express.static(publicDir));
app.use(cookieParser());

app.set('view engine', 'hbs');
app.set('views', viewDir);
hbs.registerPartials(partialsDir);

app.use(public);


module.exports = app;
