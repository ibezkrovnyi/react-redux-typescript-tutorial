import { ACTION_TYPES, Actions } from './actions';
import { initialHeroesState } from './state';

export default function (state = initialHeroesState, action: Actions) {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      let id = state.length;
      state.map(hero => hero.id).sort().reduce((prev, current) => {
        if (current - prev >= 2) id = prev + 1;
        return current;
      });

      return [
        ...state,
        { id, name: action.name },
      ];

    case ACTION_TYPES.EDIT:
      return state.map(hero => hero.id === action.id ? { id: hero.id, name: action.name } : hero);

    case ACTION_TYPES.DELETE:
      return state.filter(hero => hero.id !== action.id);

    default:
      return state;
  }
}
