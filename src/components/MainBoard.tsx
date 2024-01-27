import { CreateNote } from "./CreateNote/CreateNote";
import { NotesList } from "./NotesList/NotesList";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useFetchNotes } from "./../hooks/useFetchNotes";

export const MainBoard = () => {
  const { notesQuery, addNoteQuery, deleteNoteQuery } = useFetchNotes();
  console.log(notesQuery.error?.message);

  const addNote = (noteText: string) => {
    const newNote = {
      title: noteText,
      content: "CONTENT",
    };

    addNoteQuery.mutate(newNote);
  };

  const deleteNote = (noteId: string) => {
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
          <p>We're sorry, something went wrong. {notesQuery.error.message}</p>
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
