const express = require('express');
const router = express.Router();
const { createComic, getAllComics, updateComic, deleteComic, getComicById } = require("../controller/comicController");

router.post("/", createComic);
router.get("/", getAllComics);
router.get("/:id", getComicById);
router.put("/:id", updateComic);
router.delete("/:id", deleteComic);

module.exports = router;