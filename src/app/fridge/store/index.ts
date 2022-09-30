export * from './reducers';
export * from './actions';
//export * from './effects';
export * from './selectors';

import { FridgeState } from './reducers/fridge.reducer';

export interface State {
  fridge: FridgeState;
}
