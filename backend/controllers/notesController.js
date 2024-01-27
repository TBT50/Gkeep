import { v4 as uuidv4 } from "uuid";

import Note from "./../model/Note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find(); // Retrieve all notes from the database
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error getting notes:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getNoteById = async (req, res) => {
  const noteId = req.params.id;
  try {
    const note = await Note.findOne({ id: noteId });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error getting notes:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addNote = async (req, res) => {
  const { title, content } = req.body;
  const id = uuidv4();

  try {
    const note = new Note({
      id,
      title,
      content,
    });

    await note.save();
    res.status(201).json({ message: "Note added successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = async (req, res) => {
  const noteId = req.params.id;
  try {
    const noteToDelete = await Note.findOneAndDelete({ id: noteId });
    if (!noteToDelete) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
