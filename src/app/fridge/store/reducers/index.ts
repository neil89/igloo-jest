import { ActionReducerMap } from '@ngrx/store';
import { State } from '..';
import { fridgeReducer } from './fridge.reducer';

export const reducers: ActionReducerMap<State> = {
  fridge: fridgeReducer
};
