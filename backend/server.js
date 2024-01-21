const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8080;

const notes = [
  { id: 1, title: "Note1", content: "ELO" },
  { id: 2, title: "Note2", content: "ELO2" },
  { id: 3, title: "Note3", content: "ELO33" },
];

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = notes.filter((note) => note.id === Number(req.params.id));
  res.send(note);
});

app.post("/notes", (req, res) => {
  const newNote = req.body;
  console.log(newNote);
  notes.push(newNote);
  res.status(201).json({ message: "Note added successfully" });
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
