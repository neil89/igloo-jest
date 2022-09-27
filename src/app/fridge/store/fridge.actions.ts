/* eslint-disable @typescript-eslint/naming-convention */

import { createAction, props } from '@ngrx/store';
import { FoodStuff } from 'src/app/models/food.model';

export enum FoodStuffCardActionsType {
  SET_FOOD_STUFF_ACTIVE = '[FoodStuff Card] Set food stuff active',
  UNSET_FOOD_STUFF_ACTIVE = '[FoodStuff Card] Unset food stuff active',
  VIEW_DETAIL_FOOD_STUFF = '[FoodStuff Card] View detail food stuff',
  EDIT_FOOD_STUFF = '[FoodStuff Card] Edit food stuff',
  EDIT_FOOD_STUFF_SUCCESS = '[FoodStuff Card] Edit food stuff success',
  EDIT_FOOD_STUFF_FAIL = '[FoodStuff Card] Edit food stuff fail',
  DELETE_FOOD_STUFF = '[FoodStuff Card] Delete food stuff',
  DELETE_FOOD_STUFF_CONFIRMATION = '[FoodStuff Card] Delete food stuff confirmation modal',
  DELETE_FOOD_STUFF_SUCCESS = '[FoodStuff Card] Delete food stuff success',
  DELETE_FOOD_STUFF_FAIL = '[FoodStuff Card] Delete food stuff fail'
}

export const setFoodStuffActive = createAction(
  FoodStuffCardActionsType.SET_FOOD_STUFF_ACTIVE,
  props<{ foodId: string }>()
);
export const unsetFoodStuffActive = createAction(
  FoodStuffCardActionsType.UNSET_FOOD_STUFF_ACTIVE,
  props<{ foodId: string }>()
);
export const viewDetailFoodStuff = createAction(
  FoodStuffCardActionsType.VIEW_DETAIL_FOOD_STUFF,
  props<{ foodStuff: FoodStuff }>()
);
export const editFoodStuff = createAction(
  FoodStuffCardActionsType.EDIT_FOOD_STUFF,
  props<{ foodStuff: FoodStuff }>()
);
export const editFoodStuffSuccess = createAction(
  FoodStuffCardActionsType.EDIT_FOOD_STUFF_SUCCESS,
  props<{ foodStuff: FoodStuff }>()
);
export const editFoodStuffFail = createAction(
  FoodStuffCardActionsType.EDIT_FOOD_STUFF_FAIL,
  props<{ error: Error }>()
);
export const deleteFoodStuff = createAction(
  FoodStuffCardActionsType.DELETE_FOOD_STUFF,
  props<{ foodStuff: FoodStuff }>()
);
export const deleteFoodStuffConfirmation = createAction(
  FoodStuffCardActionsType.DELETE_FOOD_STUFF_CONFIRMATION,
  props<{ foodStuff: FoodStuff }>()
);
export const deleteFoodStuffSuccess = createAction(
  FoodStuffCardActionsType.DELETE_FOOD_STUFF_SUCCESS,
  props<{ foodStuff: FoodStuff }>()
);
export const deleteFoodStuffFail = createAction(
  FoodStuffCardActionsType.DELETE_FOOD_STUFF_FAIL,
  props<{ error: Error }>()
);
