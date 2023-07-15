const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');


var chapterSchema = new mongoose.Schema({
    ChapterId: {
        type: String,
        required: true,
    },
    ChapterName: {
        type: String,
        required: true,
    },
    PostedDate: {
        type: String,
        required: true,
    },
    ComicId: {
        // type: ObjectId, ref: "Comic"
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Chapter", chapterSchema);