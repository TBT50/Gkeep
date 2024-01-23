import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();

import {
  addNote,
  getNoteById,
  getNotes,
  deleteNote,
} from "./controllers/noteController.js";

const PORT = 8080;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>MAIN PAGE</h1>");
});

app.route("/notes").get(getNotes).post(addNote);
app.route("/notes/:id").get(getNoteById).delete(deleteNote);

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
