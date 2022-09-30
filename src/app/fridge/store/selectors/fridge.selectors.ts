import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FridgeState } from '../reducers/fridge.reducer';

export const selectFridgeDataFeatureState = createFeatureSelector<FridgeState>('fridge');

export const selectFoodsStuffList = createSelector(
  selectFridgeDataFeatureState,
  state => state.foodsStuffList
);

export const selectActiveFoodStuff = createSelector(
  selectFridgeDataFeatureState,
  state => state.activeFoodStuff
);

export const selectActiveFoodStuffId = createSelector(
  selectFridgeDataFeatureState,
  state => state.activeFoodStuff.id
);

export const selectActiveFoodStuffName = createSelector(
  selectFridgeDataFeatureState,
  state => state.activeFoodStuff?.name
);

export const selectActiveFoodStuffExpirationType = createSelector(
  selectFridgeDataFeatureState,
  state => state.activeFoodStuff?.expirationType
);

export const selectActiveFoodStuffGroup = createSelector(
  selectFridgeDataFeatureState,
  state => state.activeFoodStuff?.group
);

export const selectOpenDetailFoodStuff = createSelector(
  selectFridgeDataFeatureState,
  state => state.viewDetailFoodStuff
);
