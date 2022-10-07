export interface FoodStuffModel {
  id: string;
  amount: number;
  units: UnitsOfMeasure;
  name: string;
  group: FoodGroup;
  expirationType: FoodExpirationType;
  expirationDate?: Date | null;
  storagedIn: FoodStoragePlace;
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

export interface FoodGroupModel {
  name: FoodGroupModel;
}

export type FoodExpirationType =
  'Imperisable' |
  'Long-lasting' |
  'Short-lasting' |
  'Day-lasting';

export interface FoodExpirationTypeModel {
  name: FoodExpirationType;
  lowRange: number;
  highRange: number;
}

export type FoodStoragePlace =
'Pantry' |  // Ambient temperature (20)
'Fridge' |  // 4º-5º
'Freezer';  // -18º

export interface FoodStoragePlaceModel {
  name: FoodStoragePlace;
  temperature: number;
}
