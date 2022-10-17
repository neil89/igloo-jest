import { FormControl } from '@angular/forms';
import { FoodExpirationTypeModel, FoodGroupModel, FoodStoragePlaceModel } from './food.model';

export interface DetailFoodForm {
  name: FormControl<string>;
  units: FormControl<number>;
  group: FormControl<FoodGroupModel>;
  expirationType: FormControl<FoodExpirationTypeModel>;
  expirationDate: FormControl<Date | null>;
  storagedIn: FormControl<FoodStoragePlaceModel>;
}
