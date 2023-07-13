const Account = require('../models/accountModel');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require('../utils/validateMongodbId');

const createAccount = asyncHandler(async (req, res) => {
    try {
        const newAccount = await Account.create(req.body);
        res.json(newAccount);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getAllAccounts = asyncHandler(async (req, res) => {
    try {
        const Accounts = await Account.find();
        res.json(Accounts);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getAccountById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const Accounts = await Account.find();
        res.json(Accounts);
    } catch (error) {
        throw new Error(error.message);
    }
});

const updateAccount = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const Account = await Account.findById(id);
        res.json(Account);
    } catch (error) {
        throw new Error(error.message);
    }
});

const deleteAccount = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const AccountDelete = await Account.findByIdAndDelete(id);
        res.json(AccountDelete);
    } catch (error) {
        throw new Error(error.message);
    }
});


module.exports = {
    createAccount,
    getAllAccounts,
    updateAccount,
    deleteAccount,
    getAccountById,
};