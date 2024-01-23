let notes = [
  { id: 1, title: "Note1", content: "ELO" },
  { id: 2, title: "Note2", content: "ELO2" },
  { id: 3, title: "Note3", content: "ELO33" },
];

export const getNotes = (req, res) => {
  res.json(notes);
};

export const getNoteById = (req, res) => {
  const note = notes.filter((note) => note.id === Number(req.params.id));
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.send(note);
};

export const addNote = (req, res) => {
  const newNote = req.body;
  notes.push(newNote);
  res.status(201).json({ message: "Note added successfully" });
};

export const deleteNote = (req, res) => {
  const noteId = req.params.id;
  const updatedNotes = notes.filter((note) => note.id !== Number(noteId));
  notes = updatedNotes;
  return res.status(200).json({ message: "Note deleted successfully" });
};
