/* eslint-disable @typescript-eslint/naming-convention */

import { createAction, props } from '@ngrx/store';

import { FoodExpirationTypeModel, FoodGroupModel, FoodStoragePlace, FoodStoragePlaceModel } from 'src/app/models/food.model';
import { CustomError } from 'src/app/models/error.model';

export enum FoodCollectionsActionsType {
  LOAD_FOOD_EXPIRATION_TYPE = '[FoodStuff Edit] Load food expiration type collection',
  LOAD_FOOD_EXPIRATION_TYPE_SUCCESS = '[FoodStuff Edit] Load food expiration type collection success',
  LOAD_FOOD_EXPIRATION_TYPE_FAIL = '[FoodStuff Edit] Load food expiration type collection fail',
  LOAD_FOOD_GROUP = '[FoodStuff Edit] Load food group collection',
  LOAD_FOOD_GROUP_SUCCESS = '[FoodStuff Edit] Load food group collection success',
  LOAD_FOOD_GROUP_FAIL = '[FoodStuff Edit] Load food group collection fail',
  LOAD_FOOD_STORAGE_PLACE = '[FoodStuff Edit] Load food storage place collection',
  LOAD_FOOD_STORAGE_PLACE_SUCCESS = '[FoodStuff Edit] Load food storage place collection success',
  LOAD_FOOD_STORAGE_PLACE_FAIL = '[FoodStuff Edit] Load food storage place collection fail',
  LOAD_ALL_FOOD_COLLECTIONS = '[FoodStuff Edit] Load food expiration type, groups and storage places collections',
  LOAD_ALL_FOOD_COLLECTIONS_SUCCESS = '[FoodStuff Edit] Load food expiration type, groups and storage places collections success',
  LOAD_ALL_FOOD_COLLECTIONS_FAIL = '[FoodStuff Edit] Load food expiration type, groups and storage places collections fail'
}

export const loadFoodExpirationType = createAction(
  FoodCollectionsActionsType.LOAD_FOOD_EXPIRATION_TYPE
);
export const loadFoodExpirationTypeSuccess = createAction(
  FoodCollectionsActionsType.LOAD_FOOD_EXPIRATION_TYPE_SUCCESS,
  props<{ foodExpirationTypes: FoodExpirationTypeModel[] }>()
);
export const loadFoodExpirationTypeFail = createAction(
  FoodCollectionsActionsType.LOAD_FOOD_EXPIRATION_TYPE_FAIL,
  props<{ error: CustomError }>()
);

export const loadFoodGroup = createAction(
  FoodCollectionsActionsType.LOAD_FOOD_GROUP
);
export const loadFoodGroupSuccess = createAction(
  FoodCollectionsActionsType.LOAD_FOOD_GROUP_SUCCESS,
  props<{ foodGroups: FoodGroupModel[] }>()
);
export const loadFoodGroupFail = createAction(
  FoodCollectionsActionsType.LOAD_FOOD_GROUP_FAIL,
  props<{ error: CustomError }>()
);

export const loadFoodStoragePlace = createAction(
  FoodCollectionsActionsType.LOAD_FOOD_STORAGE_PLACE
);
export const loadFoodStoragePlaceSuccess = createAction(
  FoodCollectionsActionsType.LOAD_FOOD_STORAGE_PLACE_SUCCESS,
  props<{ foodStoragePlaces: FoodStoragePlaceModel[] }>()
);
export const loadFoodStoragePlaceFail = createAction(
  FoodCollectionsActionsType.LOAD_FOOD_STORAGE_PLACE_FAIL,
  props<{ error: CustomError }>()
);


export const loadAllFoodCollections = createAction(
  FoodCollectionsActionsType.LOAD_ALL_FOOD_COLLECTIONS
);
export const loadAllFoodCollectionsSuccess = createAction(
  FoodCollectionsActionsType.LOAD_ALL_FOOD_COLLECTIONS_SUCCESS,
  props<{
    foodExpirationTypes: FoodExpirationTypeModel[];
    foodGroups: FoodGroupModel[];
    foodStoragePlaces: FoodStoragePlaceModel[];
  }>()
);
export const loadAllFoodCollectionsFail = createAction(
  FoodCollectionsActionsType.LOAD_ALL_FOOD_COLLECTIONS_FAIL,
  props<{ error: CustomError }>()
);
