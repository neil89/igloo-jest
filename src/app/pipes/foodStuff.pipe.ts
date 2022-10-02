import { Pipe, PipeTransform } from '@angular/core';
import { FoodExpirationType, FoodGroup, StoragePlace, UnitsOfMeasure } from '../models/food.model';
import { Utils } from '../shared/utils';

@Pipe({ name: 'foodStuffUnitsOfMeasure' })
export class FoodStuffUnitsOfMeasure implements PipeTransform {
  transform(value: UnitsOfMeasure, amount: number ): string {
    let foodStuffAmount = `${amount}`;
    let measure;
    switch(value) {
      case 'kg':
      case 'g':
        measure = amount === 1 ? value : `${value}s`;
        foodStuffAmount += ` ${measure}`;
        break;
      case 'package':
        measure = amount === 1 ? 'paquete' : 'paquetes';
        foodStuffAmount += ` ${measure}`;
        break;
      case 'bottle':
        measure = amount === 1 ? 'bote' : 'botes';
        foodStuffAmount += ` ${measure}`;
        break;
    }

    return foodStuffAmount;
  }
}

@Pipe({ name: 'foodStuffGroup' })
export class FoodStuffGroup implements PipeTransform {
  transform(value: FoodGroup): string {
    switch(value.toLowerCase()) {
      case 'vegetables':
        return 'Frutas y verduras';
      case 'sauces':
        return 'Salsas y aceites';
      case 'bread':
        return 'Pan y cereales';
      case 'dairy':
        return 'Huevos, lácteos y derivados';
      case 'meat':
        return 'Carne y embutidos';
      case 'fish':
        return 'Pescado y marisco';
      case 'frozen':
        return 'Congelados';
      case 'vegetarian':
        return 'Vegetariano';
      case 'snacks':
        return 'Picoteo y chuches';
      case 'cleaning':
        return 'Limpieza y aseo';
      case 'pets':
        return 'Mascotas';
    }
  }
}

@Pipe({ name: 'foodStuffExpirationType'})
export class FoodStuffExpirationType implements PipeTransform {
  transform(value: FoodExpirationType): string {
    switch(value.toLowerCase()) {
      case 'imperisable':
        return 'Imperecedero';
      case 'long-lasting':
        return 'Larga';
      case 'short-lasting':
        return 'Corta';
      case 'day-lasting':
        return 'En el día';
    }
  }
}

@Pipe({ name: 'foodStuffExpirationTypeWithEstimatedDate'})
export class FoodStuffExpirationTypeWithEstimatedDate implements PipeTransform {
  transform(value: FoodExpirationType): string {
    const today = new Date();
    let translation = '';

    switch(value.toLowerCase()) {
      case 'imperisable':
        today.setDate(today.getDate()+ 60);
        translation = 'Imperecedero';
        break;
      case 'long-lasting':
        today.setDate(today.getDate()+ 21);
        translation = 'Larga';
        break;
      case 'short-lasting':
        today.setDate(today.getDate()+ 7);
        translation = 'Corta';
        break;
      case 'day-lasting':
        today.setDate(today.getDate()+ 2);
        translation = 'En el día';
        break;
    }

    return `${translation} (${Utils.convertDateToES(today)})`;
  }
}

@Pipe({ name: 'foodStuffStorage'})
export class FoodStuffStorage implements PipeTransform {
  transform(value: StoragePlace): string {
    switch(value.toLowerCase()) {
      case 'pantry':
        return 'Despensa';
      case 'fridge':
        return 'Frigorífico';
      case 'freezer':
        return 'Congelador';
    }
  }
}
