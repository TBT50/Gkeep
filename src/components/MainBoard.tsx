import { useState } from "react";

import { CreateNote } from "./CreateNote/CreateNote";
import { NotesList } from "./NotesList/NotesList";

import { Note } from "./../types";

export const MainBoard = () => {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, noteText: "Note1" },
    { id: 2, noteText: "Note2" },
  ]);

  const addNote = (noteText: string) => {
    const newNote: Note = { id: Math.random(), noteText };
    setNotes([...notes, newNote]);
  };

  return (
    <main className="border-2 p-4">
      Main Board
      <CreateNote addNote={addNote} />
      {notes.length > 0 ? (
        <NotesList notes={notes} />
      ) : (
        <p>The list is empty</p>
      )}
    </main>
  );
};
