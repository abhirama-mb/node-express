const supabase = require("../config/supabase");

// GET /notes
const getNotes = async (req, res) => {
    const { data, error } = await supabase
        .from("notes")
        .select("*");

    if (error) {
        return res.status(500).json(error);
    }

    res.json(data);
};

// POST /notes
const createNote = async (req, res) => {
    const { title, content, category } = req.body;

    const { data, error } = await supabase
        .from("notes")
        .insert([
            {
                title,
                content,
                category
            }
        ])
        .select();

    if (error) {
        return res.status(500).json(error);
    }

    res.status(201).json(data);
};

// GET /notes/:id
const getNoteById = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json(data);
};

module.exports = {
    getNotes,
    createNote,
    getNoteById
};