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

module.exports = {
  getNotes,
};