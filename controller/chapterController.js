const Chapter = require('../models/chapterModel');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require('../utils/validateMongodbId');

const createChapter = asyncHandler(async (req, res) => {
    try {
        const newChapter = await Chapter.create(req.body);
        res.json(newChapter);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getAllChapters = asyncHandler(async (req, res) => {
    try {
        const Chapters = await Chapter.find();
        res.json(Chapters);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getChapterById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const Chapters = await Chapter.find();
        res.json(Chapters);
    } catch (error) {
        throw new Error(error.message);
    }
});

const updateChapter = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const Chapter = await Chapter.findById(id);
        res.json(Chapter);
    } catch (error) {
        throw new Error(error.message);
    }
});

const deleteChapter = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const ChapterDelete = await Chapter.findByIdAndDelete(id);
        res.json(ChapterDelete);
    } catch (error) {
        throw new Error(error.message);
    }
});


module.exports = {
    createChapter,
    getAllChapters,
    updateChapter,
    deleteChapter,
    getChapterById,
};