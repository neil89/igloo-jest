export interface FoodStuff {
  id: string;
  amount: number;
  units: UnitsOfMeasure;
  name: string;
  group: FoodGroup;
  expirationType: FoodExpirationType;
  expirationDate?: Date | null;
  storagedIn: StoragePlace;
}

// Pluralize-es for plural when UnitsOfMeasure is units ??
// https://github.com/jfromaniello/pluralize-es

export type UnitsOfMeasure =
  'kg' |
  'g' |
  'units' |
  'package'|
  'bottle';

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
  'Pets';

export type FoodExpirationType =
  'Imperisable' |
  'Long-lasting' |
  'Short-lasting' |
  'Day-lasting';

  export type StoragePlace =
  'Pantry' |  // Ambient temperature
  'Fridge' |  // 4º-5º
  'Freezer';  // -18º
