import express from "express";

const notesRouter = express.Router();

import {
  addNote,
  getNoteById,
  getNotes,
  deleteNote,
} from "../controllers/notesController.js";

notesRouter.get("/", getNotes);
notesRouter.get("/:id", getNoteById);
notesRouter.post("/", addNote);
notesRouter.delete("/:id", deleteNote);

export default notesRouter;
