import { FoodStuff } from './food.model';

export interface Fridge {
  foodStuffList: FoodStuff[];
  activeFoodStuff: FoodStuff;
}
