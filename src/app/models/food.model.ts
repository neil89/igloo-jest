export interface FoodStuff {
  id: string;
  amount: number;
  units: UnitsOfMeasure;
  name: string;
  group: FoodGroup;
  expirationType: FoodExpirationType;
  expirationDate?: Date | null;
}

export type UnitsOfMeasure =
  'kg' |
  'g' |
  'units' |
  'package';

export type FoodGroup =
  'Vegetables' |
  'Sauces' |
  'Bread' |
  'Dairy' |
  'Meat' |
  'Fish' |
  'Frozen' |
  'Vegetarian' |
  'Snacks' |
  'Cleaning' |
  'Animals';

export type FoodExpirationType =
  'Imperisable' |
  'Long-lasting' |
  'Short-lasting' |
  'Day-lasting';
