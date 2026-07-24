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

// PUT /notes/:id
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content, category } = req.body;

    const { data, error } = await supabase
        .from("notes")
        .update({
            title,
            content,
            category
        })
        .eq("id", id)
        .select()
        .single();

    if (error) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json(data);
};

// DELETE /notes/:id
const deleteNote = async (req, res) => {
    const { id } = req.params;

    const { error } = await supabase
        .from("notes")
        .delete()
        .eq("id", id);

    if (error) {
        return res.status(500).json(error);
    }

    res.json({
        message: "Note deleted successfully"
    });
};




module.exports = {
    getNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote
};