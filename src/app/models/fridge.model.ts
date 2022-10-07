import { FoodStuffModel } from './food.model';

export interface Fridge {
  foodStuffList: FoodStuffModel[];
  activeFoodStuff: FoodStuffModel;
}
