import { createReducer, on } from '@ngrx/store';

import { FoodStuff } from 'src/app/models/food.model';
import { CustomError } from 'src/app/models/error.model';
import { FridgeActions } from '../actions';

export interface FridgeState {
  foodsStuffList: FoodStuff[];
  activeFoodStuff: FoodStuff;
  viewDetailFoodStuff: boolean;
  editFoodStuff: boolean;
  error: CustomError;
}

const initialFridgeState: FridgeState = {
  foodsStuffList: [],
  activeFoodStuff: null,
  viewDetailFoodStuff: false,
  editFoodStuff: false,
  error: null
};


export const fridgeReducer = createReducer<FridgeState>(
  initialFridgeState,
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
);
