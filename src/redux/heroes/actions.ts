import { ThunkAction } from '../helpers';

export enum ACTION_TYPES {
  ADD = 'HEROES.ADD',
  EDIT = 'HEROES.EDIT',
  DELETE = 'HEROES.DELETE',
}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const heroesActions = {
  add: (name: string) => ({ type: ACTION_TYPES.ADD, name }),
  edit: (id: number, name: string) => ({ type: ACTION_TYPES.EDIT, id, name }),
  delete: (id: number) => ({ type: ACTION_TYPES.DELETE, id }),
  save: (): ThunkAction => async (dispatch, getState) => {
    // just for async/await redux-thunk action demo
    await timeout(500);
  },
  load: (): ThunkAction => async (dispatch, getState) => {
    // just for async/await redux-thunk action demo
    await timeout(500);
  },
};

interface AddAction {
  type: ACTION_TYPES.ADD;
  name: string;
}

interface EditAction {
  type: ACTION_TYPES.EDIT;
  id: number;
  name: string;
}

interface DeleteAction {
  type: ACTION_TYPES.DELETE;
  id: number;
}

export type Actions = AddAction | DeleteAction | EditAction;
