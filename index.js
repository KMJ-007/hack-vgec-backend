const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = "mongodb+srv://admin:"+process.env.MONGO_PASS+"@cluster0.q1chg.mongodb.net/?retryWrites=true&w=majority"

const app = express();

app.use(express.json());

//db connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.listen(3000, () => {
    console.log('Listening on port 3000');
    });