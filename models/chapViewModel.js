const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');


var chapViewSchema = new mongoose.Schema({
    Image: {
        type: String,
        required: true,
    },
    ChapterId: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("ChapView", chapViewSchema);