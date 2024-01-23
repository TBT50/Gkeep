import { CreateNote } from "./CreateNote/CreateNote";
import { NotesList } from "./NotesList/NotesList";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Note } from "./../types";

import { useFetchNotes } from "./../hooks/useFetchNotes";

interface AddNoteResponse {
  message: string;
}

export const MainBoard = () => {
  const { notesQuery, addNoteQuery, deleteNoteQuery } = useFetchNotes();

  const addNote = (noteText: string) => {
    const newNote: Note = {
      id: Math.random(),
      title: noteText,
      content: "CONTENT",
    };

    addNoteQuery.mutate(newNote);
  };

  const deleteNote = (noteId: number) => {
    deleteNoteQuery.mutate(noteId);
  };

  return (
    <>
      <main className="border-2 p-4">
        Main Board
        <CreateNote addNote={addNote} />
        {notesQuery.isLoading ? (
          <p>LOADING...</p>
        ) : notesQuery.isError ? (
          <p>We're sorry, something went wrong</p>
        ) : (
          <NotesList notes={notesQuery.data} deleteNote={deleteNote} />
        )}
      </main>
      {addNoteQuery.isPending ? (
        "Adding todo..."
      ) : (
        <>
          {addNoteQuery.isError ? (
            <div>An error occurred: {addNoteQuery.error.message}</div>
          ) : null}

          {addNoteQuery.isSuccess ? (
            <div>{addNoteQuery.data.message}</div>
          ) : null}
        </>
      )}
      <ReactQueryDevtools />
    </>
  );
};
