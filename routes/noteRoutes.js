const express = require("express");
const router = express.Router();

const {
    getNotes,
    createNote,
    getNoteById,
    updateNote
} = require("../controllers/noteController");

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);

module.exports = router;