import { addNewNote, fetchNotes, fetchSingleNote } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchNotes = (id?: number) => {
  const queryClient = useQueryClient();
  const notesQuery = useQuery({ queryKey: ["notes"], queryFn: fetchNotes });
  const singleNoteQuery = id
    ? useQuery({ queryKey: ["notes", id], queryFn: () => fetchSingleNote(id) })
    : null;

  const addNoteQuery = useMutation({
    mutationFn: addNewNote,
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
  };
};
