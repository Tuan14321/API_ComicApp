const Comic = require('../models/comicModel');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require('../utils/validateMongodbId');

const createComic = asyncHandler(async (req, res) => {
    try {
        const newComic = await Comic.create(req.body);
        res.json(newComic);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getAllComics = asyncHandler(async (req, res) => {
    try {
        const Comics = await Comic.find();
        res.json(Comics);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getComicById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const Comics = await Comic.find();
        res.json(Comics);
    } catch (error) {
        throw new Error(error.message);
    }
});

const updateComic = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const Comic = await Comic.findById(id);
        res.json(Comic);
    } catch (error) {
        throw new Error(error.message);
    }
});

const deleteComic = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const ComicDelete = await Comic.findByIdAndDelete(id);
        res.json(ComicDelete);
    } catch (error) {
        throw new Error(error.message);
    }
});


module.exports = {
    createComic,
    getAllComics,
    updateComic,
    deleteComic,
    getComicById,
};