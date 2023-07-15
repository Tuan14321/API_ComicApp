const mongoose = require('mongoose');

var comicSchema = new mongoose.Schema({
    ComicName: {
        type: String,
        required: true,
    },
    ChapterName: {
        type: String,
        required: true,
    },
    ImageLink: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Comic", comicSchema);