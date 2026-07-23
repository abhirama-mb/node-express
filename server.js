require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student Notes API is running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const noteRoutes = require("./routes/noteRoutes");
app.use(express.json());
app.use("/notes", noteRoutes);