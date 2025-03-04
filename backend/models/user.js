const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    oauthProvider: {
        type: String,
        required: false
    },
    oauthId: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);


//------------------------------------------------------------------------------------
