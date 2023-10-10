import { useState } from "react";

type CreateNoteProps = {
  addNote: (note: string) => void;
};

export const CreateNote = ({ addNote }: CreateNoteProps) => {
  const [noteText, setNoteText] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote(noteText);
    setNoteText("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="mt-4">
      <div>
        <label htmlFor="createNote" className="block text-gray-700 font-medium">
          Create a note
        </label>
        <textarea
          id="createNote"
          required
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="mb-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create
      </button>
    </form>
  );
};
