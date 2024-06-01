const mongoose = require("mongoose");

const elereqSchema = new mongoose.Schema({
    tokenRequested:{
        type: String,
        required: true,
        trim: true
    },
    pricePerToken:{
        type: String,
        required: true,
        trim: true
    },
    orgId:{
        type: String,
        required: true,
    },
    greenOrgId: {
        type: String,
        required: true,
    },
    orgName:{
        type: String,
        required: true,
    },
    greenOrgName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    }
     
}, {timestamps: true});

module.exports = mongoose.model("EleReq",elereqSchema);