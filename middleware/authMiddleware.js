const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1];
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await User.findById(decoded?.id);
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized token expired, Please Login Again");
        }
    } else {
        throw new Error("There is no attached to header")
    }
});

const isAdminMiddleware = asyncHandler(async (req, res, next) => {
    const { email } = req.user;
    const userAdmin = await User.findOne({ email });
    if (userAdmin.role !== "admin") {
        throw new Error("You are not an admin");
    } else {
        next();
    }
});

module.exports = {
    authMiddleware,
    isAdminMiddleware
};