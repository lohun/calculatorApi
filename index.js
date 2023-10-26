const express = require("express");
const cors = require('cors');
const app = express();

require('./db');

const CalculatorModel = require('./model');
const { default: mongoose } = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.get('/', (req, res) => {
    CalculatorModel.find({})
        .then(e => {
            res.json(e)
        })
        .catch(e => console.error(e))
})

app.post('/add', (req, res) => {
    const body = req.body;

    const data = new CalculatorModel({
        _id: new mongoose.mongo.ObjectId(),
        calculation: body.calculation
    })

    data.save();

    res.json({message: "Data saved"})
})

app.listen(8000, () => {
    console.log('listening on port 8000')
})