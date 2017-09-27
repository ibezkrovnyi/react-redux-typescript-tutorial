import { combineReducers } from 'redux';
import { RootState } from './rootState';
import heroes from './heroes/reducers';

export default combineReducers<RootState>({
  heroes,
});
