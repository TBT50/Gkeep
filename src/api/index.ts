import { Note } from "@/types";

export const fetchNotes = async () => {
  const response = await fetch(`http://localhost:8080/notes`);
  const data = await response.json();
  return data;
};

export const fetchSingleNote = async (id: number) => {
  const response = await fetch(`http://localhost:8080/notes/${id}`);
  const data = await response.json();
  return data;
};

export const addNewNote = (newNote: Note) => {
  return fetch(`http://localhost:8080/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  });
};
