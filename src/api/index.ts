import { NotesListResponse } from "@/types";

export const fetchNotes = async () => {
  try {
    const response = await fetch(`http://localhost:8080/notes`);
    if (!response.ok) {
      throw new Error(`Failed to fetch notes. Status: ${response.status}`);
    }
    const data: NotesListResponse[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network error:", error.message);
    } else {
      console.error("An unexpected error occurred:", (error as Error).message);
    }
    throw error;
  }
};

export const fetchSingleNote = async (id: string) => {
  const response = await fetch(`http://localhost:8080/notes/${id}`);
  const data = await response.json();
  return data;
};

export const addNewNote = async (newNote: any) => {
  const response = await fetch(`http://localhost:8080/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  });
  const data = await response.json();
  return data;
};

export const deleteNote = async (noteId: string) => {
  const response = await fetch(`http://localhost:8080/notes/${noteId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
