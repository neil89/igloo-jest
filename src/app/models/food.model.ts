export interface FoodStuffFSDocumentModel {
  id: string;
  amount: number;
  units: UnitsOfMeasure;
  name: string;
  group: FoodGroup;
  expirationType: FoodExpirationType;
  expirationDateEstimated?: Date | null;
  expirationDate?: Date | null;
  storagedIn: FoodStoragePlace;
  creationDate: Date;
  lastEditDate: Date;
  remainingAmount?: number | null;
  remainingExpirationDate?: Date | null;
}

export interface FoodStuffExpandedModel {
  id: string;
  amount: number;
  units: UnitsOfMeasure;
  name: string;
  group: FoodGroupModel;
  expirationType: FoodExpirationTypeModel;
  expirationDateEstimated?: Date | null;
  expirationDate?: Date | null;
  storagedIn: FoodStoragePlaceModel;
  creationDate: Date;
  lastEditDate: Date;
  remainingAmount?: number | null;
  remainingExpirationDate?: Date | null;
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
  'vegetables' |
  'sauces' |
  'bread' |
  'dairy' |
  'meat' |
  'fish' |
  'frozen' |
  'vegetarian' |
  'snacks' |
  'cleaning' |
  'pets';

export interface FoodGroupModel {
  id: string;
  name: FoodGroupModel;
}

export type FoodExpirationType =
  'imperisable' |
  'long-lasting' |
  'short-lasting' |
  'day-lasting';

export interface FoodExpirationTypeModel {
  id: string;
  name: FoodExpirationType;
  lowRange: number;
  highRange: number;
}

export type FoodStoragePlace =
'pantry' |  // Ambient temperature (20)
'fridge' |  // 4º-5º
'freezer';  // -18º

export interface FoodStoragePlaceModel {
  id: string;
  name: FoodStoragePlace;
  temperature: number;
}
