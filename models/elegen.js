const mongoose = require("mongoose");

const elegenSchema = new mongoose.Schema({
    electricityProduced:{
        type: String,
        required: true,
        trim: true
    },
    emission:{
        type: String,
        required: true,
        trim: true

    },
    weather:{
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    orgId:{
        type: String,
        required: true,
    },
    orgName:{
        type: String,
        required: true,
    },
    eleToken: {
        type: String,
        required: true,
    }
     
}, {timestamps: true});

module.exports = mongoose.model("EleGen",elegenSchema);