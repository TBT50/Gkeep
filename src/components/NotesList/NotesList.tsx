import { Note } from "./../../types";

type NotesListProps = {
  notes: Note[];
};

export const NotesList = ({ notes }: NotesListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
      {notes.map((note) => (
        <li key={note.id} className="bg-white shadow-md p-4 rounded-md">
          {note.noteText}
        </li>
      ))}
    </ul>
  );
};
