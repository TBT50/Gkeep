import { addNewNote, fetchNotes, fetchSingleNote, deleteNote } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchNotes = (id?: number) => {
  const queryClient = useQueryClient();
  const notesQuery = useQuery({ queryKey: ["notes"], queryFn: fetchNotes });
  const singleNoteQuery = id
    ? useQuery({ queryKey: ["notes", id], queryFn: () => fetchSingleNote(id) })
    : null;

  const addNoteQuery = useMutation({
    mutationFn: addNewNote,
    onSuccess: async (data) => {
      console.log(data);
      // ✅ refetch the notes
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });

  const deleteNoteQuery = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      // ✅ refetch the notes
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });

  return {
    notesQuery,
    singleNoteQuery,
    addNoteQuery,
    deleteNoteQuery,
  };
};
