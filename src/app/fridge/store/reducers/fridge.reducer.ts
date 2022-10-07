import { createReducer, on } from '@ngrx/store';

import { FoodExpirationTypeModel, FoodGroup, FoodGroupModel, FoodStoragePlaceModel, FoodStuffModel } from 'src/app/models/food.model';
import { CustomError } from 'src/app/models/error.model';
import { FoodCollectionsActions, FridgeActions } from '../actions';

export interface FridgeState {
  foodsStuffList: FoodStuffModel[];
  activeFoodStuff: FoodStuffModel;
  viewDetailFoodStuff: boolean;
  editFoodStuff: boolean;
  error: CustomError;
  foodExpirationTypes: FoodExpirationTypeModel[];
  foodGroups: FoodGroupModel[];
  foodStoragePlaces: FoodStoragePlaceModel[];
}

const initialFridgeState: FridgeState = {
  foodsStuffList: [],
  activeFoodStuff: null,
  viewDetailFoodStuff: false,
  editFoodStuff: false,
  error: null,
  foodExpirationTypes: [],
  foodGroups: [],
  foodStoragePlaces: [],
};


export const fridgeReducer = createReducer<FridgeState>(
  initialFridgeState,
  /// FRIDGE ACTIONS
  on(FridgeActions.setFoodStuffActive, (state, action): FridgeState => {
    const food = state.foodsStuffList.find( f => f.id === action.foodId );
    return {
      ...state,
      activeFoodStuff: food
    };
  }),
  on(FridgeActions.unsetFoodStuffActive, (state): FridgeState => (
    {
      ...state,
      activeFoodStuff: null
    })
  ),
  on(FridgeActions.loadFoodsStuffSuccess, (state, action): FridgeState => (
    {
      ...state,
      foodsStuffList: action.foodsStuff
    })
  ),
  on(FridgeActions.loadFoodsStuffFail, (state, action): FridgeState => (
    {
      ...state,
      error: action.error
    })
  ),
  on(FridgeActions.openDetailFoodStuff, (state): FridgeState => (
    {
      ...state,
      viewDetailFoodStuff: true
    })
  ),
  on(FridgeActions.closeDetailFoodStuff, (state): FridgeState => (
    {
      ...state,
      viewDetailFoodStuff: false
    })
  ),
  on(FridgeActions.editFoodStuffSuccess, (state, action): FridgeState => {
    const foodStuffList = state.foodsStuffList.map( f => f.id === action.foodStuff.id ? action.foodStuff : f );
    return {
      ...state,
      foodsStuffList: foodStuffList
    };
  }),
  on(FridgeActions.editFoodStuffFail, (state, action): FridgeState => (
    {
      ...state,
      error: action.error
    })
  ),
  // A generic modal confirmation module have to be created and invoked here
  // on(FridgeActions.deleteFoodStuffConfirmation, (state, action): FridgeState => {
  //})
  on(FridgeActions.deleteFoodStuffSuccess, (state, action): FridgeState => {
    const foodIdx = state.foodsStuffList.findIndex( f => f.id === action.foodStuff.id);
    return {
      ...state,
      foodsStuffList: [...state.foodsStuffList].splice(foodIdx, 1)
    };
  }),
  on(FridgeActions.deleteFoodStuffFail, (state, action): FridgeState => (
    {
      ...state,
      error: action.error
    })
  ),
  /// FRIDGE COLLECTIONS ACTIONS
  on(FoodCollectionsActions.loadFoodExpirationTypeSuccess, (state, action): FridgeState => (
    {
      ...state,
      foodExpirationTypes: action.foodExpirationTypes
    })
  ),
  on(FoodCollectionsActions.loadFoodExpirationTypeFail, (state, action): FridgeState => (
    {
      ...state,
      error: action.error
    })
  ),
  on(FoodCollectionsActions.loadFoodGroupSuccess, (state, action): FridgeState => (
    {
      ...state,
      foodGroups: action.foodGroups
    })
  ),
  on(FoodCollectionsActions.loadFoodGroupFail, (state, action): FridgeState => (
    {
      ...state,
      error: action.error
    })
  ),
  on(FoodCollectionsActions.loadFoodStoragePlaceSuccess, (state, action): FridgeState => (
    {
      ...state,
      foodStoragePlaces: action.foodStoragePlaces
    })
  ),
  on(FoodCollectionsActions.loadFoodStoragePlaceFail, (state, action): FridgeState => (
    {
      ...state,
      error: action.error
    })
  ),
  on(FoodCollectionsActions.loadAllFoodCollectionsSuccess, (state, action): FridgeState => (
    {
      ...state,
      foodExpirationTypes: action.foodExpirationTypes,
      foodGroups: action.foodGroups,
      foodStoragePlaces: action.foodStoragePlaces
    })
  ),
  on(FoodCollectionsActions.loadAllFoodCollectionsFail, (state, action): FridgeState => (
    {
      ...state,
      error: action.error
    })
  ),
);
