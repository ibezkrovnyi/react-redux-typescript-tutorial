import { NotesState, initialNotesState } from './state';
import { ACTION_TYPES, Actions } from './actions';

export default function (state: NotesState = initialNotesState, action: Actions) {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return {
        ...state,
        notes: [
          ...state.notes,
          { text: action.text },
        ],
      };

    default:
      return state;
  }
}
