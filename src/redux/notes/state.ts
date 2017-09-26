export const initialNotesState: NotesState = {
  notes: [],
};

export interface NotesState {
  notes: NoteData[];
}

export interface NoteData {
  text: string;
}
