const mongoose = require("mongoose");

const eleusedSchema = new mongoose.Schema({
    electricityUsed:{
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
        trim: true
    },
    orgName:{
        type: String,
        required: true,
        trim: true
    }
     
}, {timestamps: true});

module.exports = mongoose.model("EleUsed",eleusedSchema);