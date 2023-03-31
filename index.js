const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/router');
var bodyParser = require('body-parser')

require('dotenv').config();

const mongoURL = "mongodb+srv://admin:"+process.env.MONGO_PASS+"@cluster0.q1chg.mongodb.net/?retryWrites=true&w=majority"

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(routes);

app.use(express.json());


//db connection
const db = mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const myCollection = mongoose.Collection("indoorNavigation");

db.myCollection.insertMany([
    {
        "type": "Feature",
        "properties": {
            "name": "J BLOCK"
        },
        "geometry": {
            "coordinates": [
                72.59523036868717,
                23.107527312192374
            ],
            "type": "Point"
        },
        "id": 0
    },
    {
        "type": "Feature",
        "properties": {
            "name": "A BLOCK"
        },
        "geometry": {
            "coordinates": [
                72.59548681062563,
                23.106574880761187
            ],
            "type": "Point"
        },
        "id": 1
    },
    {
])



app.listen(3000, () => {
    console.log('Listening on port 3000');
    });