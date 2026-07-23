const supabase = require("../config/supabase");

const getNotes = async (req, res) => {
  const { data, error } = await supabase
    .from("notes")
    .select("*");

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
};

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

module.exports = {
    getNotes,
    createNote
};
