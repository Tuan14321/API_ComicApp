const express = require('express');
const router = express.Router();
const { createChapter, getAllChapters, updateChapter, deleteChapter, getChapterById } = require("../controller/chapterController");

router.post("/", createChapter);
router.get("/", getAllChapters);
router.get("/:id", getChapterById);
router.put("/:id", updateChapter);
router.delete("/:id", deleteChapter);

module.exports = router;