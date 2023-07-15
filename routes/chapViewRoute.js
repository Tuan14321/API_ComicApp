const express = require('express');
const router = express.Router();
const { createChapView, getAllChapViews, updateChapView, deleteChapView, getChapViewById } = require("../controller/chapViewController");

router.post("/", createChapView);
router.get("/", getAllChapViews);
router.get("/:id", getChapViewById);
router.put("/:id", updateChapView);
router.delete("/:id", deleteChapView);

module.exports = router;