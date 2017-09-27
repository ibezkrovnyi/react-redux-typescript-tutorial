import { ThunkAction as ThunkActionEnhanced } from 'redux-thunk';

import { RootState } from './rootState';

export type ThunkAction<RT = void> = ThunkActionEnhanced<RT, RootState, {}>;
