const express = require("express");
const router = express.Router();

const {
    getNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote
} = require("../controllers/noteController");;


router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;