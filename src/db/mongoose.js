const mongoose = require('mongoose');
const validator = require('validator');


mongoose.connect(process.env.DB_LOC).catch(() => console.log('Unable to connect DB!'));
