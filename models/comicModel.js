const mongoose = require('mongoose');

var comicSchema = new mongoose.Schema({
    comicId: {
        type: String,
        required: true,
    },
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