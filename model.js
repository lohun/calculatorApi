const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

const CalculatorSchema = new Schema({
    _id: Schema.Types.ObjectId,
    calculation: String,
});

// Compile model from schema
const CalculatorModel = mongoose.model("CalculatorModel", CalculatorSchema);


module.exports = CalculatorModel;