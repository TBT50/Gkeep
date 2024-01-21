import { Note } from "./../../types";

type NotesListProps = {
  notes: Note[];
};

export const NotesList = ({ notes }: NotesListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
      {notes.map((note) => (
        <li key={note.id} className="bg-white shadow-md p-4 rounded-md">
          <h2> {note.title}</h2>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  );
};
