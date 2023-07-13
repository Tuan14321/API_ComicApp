const mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    UserName: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Account", accountSchema);