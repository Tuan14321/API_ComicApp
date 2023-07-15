const ChapView = require('../models/chapViewModel');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require('../utils/validateMongodbId');

const createChapView = asyncHandler(async (req, res) => {
    try {
        const newChapView = await ChapView.create(req.body);
        res.json(newChapView);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getAllChapViews = asyncHandler(async (req, res) => {
    try {
        const ChapViews = await ChapView.find();
        res.json(ChapViews);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getChapViewById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const ChapViews = await ChapView.find();
        res.json(ChapViews);
    } catch (error) {
        throw new Error(error.message);
    }
});

const updateChapView = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const ChapView = await ChapView.findById(id);
        res.json(ChapView);
    } catch (error) {
        throw new Error(error.message);
    }
});

const deleteChapView = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const ChapViewDelete = await ChapView.findByIdAndDelete(id);
        res.json(ChapViewDelete);
    } catch (error) {
        throw new Error(error.message);
    }
});


module.exports = {
    createChapView,
    getAllChapViews,
    updateChapView,
    deleteChapView,
    getChapViewById,
};