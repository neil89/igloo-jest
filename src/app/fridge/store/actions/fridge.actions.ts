/* eslint-disable @typescript-eslint/naming-convention */

import { createAction, props } from '@ngrx/store';

import { FoodStuffExpandedModel, FoodStuffFSDocumentModel } from 'src/app/models/food.model';
import { CustomError } from 'src/app/models/error.model';

export enum FoodStuffCardActionsType {
  SET_FOOD_STUFF_ACTIVE = '[FoodStuff Card] Set food stuff active',
  UNSET_FOOD_STUFF_ACTIVE = '[FoodStuff Card] Unset food stuff active',
  OPEN_DETAIL_FOOD_STUFF = '[FoodStuff Card] Open panel of food stuff detail',
  CLOSE_DETAIL_FOOD_STUFF = '[FoodStuff Card] Close panel of food stuff detail',
  LOAD_FOOD_STUFF = '[Fridge] Load all foods stuff Firestore document',
  LOAD_FOOD_STUFF_SUCCESS = '[Fridge] Load all foods stuff Firestore success document',
  LOAD_FOOD_STUFF_FAIL = '[Fridge] Load all foods stuff Firestore fail document',
  LOAD_FOOD_STUFF_EXPANDED = '[Fridge] Load all foods stuff document and subdocuments',
  LOAD_FOOD_STUFF_SUCCESS_EXPANDED = '[Fridge] Load all foods stuff success document and subdocuments',
  LOAD_FOOD_STUFF_FAIL_EXPANDED = '[Fridge] Load all foods stuff fail document and subdocuments',
  EDIT_FOOD_STUFF = '[FoodStuff Card] Edit food stuff document',
  EDIT_FOOD_STUFF_SUCCESS = '[FoodStuff Card] Edit food stuff success document',
  EDIT_FOOD_STUFF_FAIL = '[FoodStuff Card] Edit food stuff fail document',
  DELETE_FOOD_STUFF = '[FoodStuff Card] Delete food stuff document',
  DELETE_FOOD_STUFF_CONFIRMATION = '[FoodStuff Card] Delete food stuff document confirmation modal',
  DELETE_FOOD_STUFF_SUCCESS = '[FoodStuff Card] Delete food stuff success document',
  DELETE_FOOD_STUFF_FAIL = '[FoodStuff Card] Delete food stuff fail document',
}

export const setFoodStuffActive = createAction(
  FoodStuffCardActionsType.SET_FOOD_STUFF_ACTIVE,
  props<{ foodId: string }>()
);
export const unsetFoodStuffActive = createAction(
  FoodStuffCardActionsType.UNSET_FOOD_STUFF_ACTIVE
);
export const openDetailFoodStuff = createAction(
  FoodStuffCardActionsType.OPEN_DETAIL_FOOD_STUFF,
  props<{ foodId: string }>()
);
export const closeDetailFoodStuff = createAction(
  FoodStuffCardActionsType.CLOSE_DETAIL_FOOD_STUFF
);
export const loadFoodsStuff = createAction(
  FoodStuffCardActionsType.LOAD_FOOD_STUFF
);
export const loadFoodsStuffSuccess = createAction(
  FoodStuffCardActionsType.LOAD_FOOD_STUFF_SUCCESS,
  props<{ foodsStuff: FoodStuffFSDocumentModel[] }>()
);
export const loadFoodsStuffFail = createAction(
  FoodStuffCardActionsType.LOAD_FOOD_STUFF_FAIL,
  props<{ error: CustomError }>()
);
export const loadFoodsStuffExpanded = createAction(
  FoodStuffCardActionsType.LOAD_FOOD_STUFF_EXPANDED
);
export const loadFoodsStuffExpandedSuccess = createAction(
  FoodStuffCardActionsType.LOAD_FOOD_STUFF_SUCCESS_EXPANDED,
  props<{ foodsStuffExpanded: FoodStuffExpandedModel[] }>()
);
export const loadFoodsStuffExpandedFail = createAction(
  FoodStuffCardActionsType.LOAD_FOOD_STUFF_FAIL_EXPANDED,
  props<{ error: CustomError }>()
);
export const editFoodStuff = createAction(
  FoodStuffCardActionsType.EDIT_FOOD_STUFF,
  props<{ foodStuff: FoodStuffFSDocumentModel }>()
);
export const editFoodStuffSuccess = createAction(
  FoodStuffCardActionsType.EDIT_FOOD_STUFF_SUCCESS,
  props<{ foodStuff: FoodStuffFSDocumentModel }>()
);
export const editFoodStuffFail = createAction(
  FoodStuffCardActionsType.EDIT_FOOD_STUFF_FAIL,
  props<{ error: CustomError }>()
);
export const deleteFoodStuff = createAction(
  FoodStuffCardActionsType.DELETE_FOOD_STUFF,
  props<{ foodStuff: FoodStuffFSDocumentModel }>()
);
export const deleteFoodStuffConfirmation = createAction(
  FoodStuffCardActionsType.DELETE_FOOD_STUFF_CONFIRMATION,
  props<{ foodStuff: FoodStuffFSDocumentModel }>()
);
export const deleteFoodStuffSuccess = createAction(
  FoodStuffCardActionsType.DELETE_FOOD_STUFF_SUCCESS,
  props<{ foodStuff: FoodStuffFSDocumentModel }>()
);
export const deleteFoodStuffFail = createAction(
  FoodStuffCardActionsType.DELETE_FOOD_STUFF_FAIL,
  props<{ error: CustomError }>()
);
