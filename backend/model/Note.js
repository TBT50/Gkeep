import mongoose from "mongoose";
const { Schema, model } = mongoose;

const noteSchema = new Schema({
  id: String,
  title: String,
  content: String,
});

const Note = model("Note", noteSchema);

export default Note;
