require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Version from main branch  hhehe 🔥");
});

const PORT = process.env.PORT || 3000;
console.log("Learning git revert");


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const noteRoutes = require("./routes/noteRoutes");
app.use(express.json());
app.use("/notes", noteRoutes);


console.log("Learning git stash");

