import { NotesState } from './state';

export enum ACTION_TYPES {
  ADD = 'NOTES.ADD',
  LOADED = 'NOTES.LOADED',
}

export const notesActions = {
  add: (text: string) => ({ type: ACTION_TYPES.ADD, text }),
  loaded: (notesState: NotesState) => ({ type: ACTION_TYPES.LOADED, notesState }),
};

interface AddAction {
  type: ACTION_TYPES.ADD;
  text: string;
}

interface LoadedAction {
  type: ACTION_TYPES.LOADED;
  notesState: NotesState;
}

export type Actions = AddAction;
