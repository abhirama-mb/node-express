const express = require("express");
const router = express.Router();

const {
    getNotes,
    createNote,
    getNoteById
} = require("../controllers/noteController");

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);

module.exports = router;