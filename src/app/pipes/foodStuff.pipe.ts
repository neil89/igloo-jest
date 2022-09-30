import { Pipe, PipeTransform } from '@angular/core';
import { FoodExpirationType, FoodGroup, UnitsOfMeasure } from '../models/food.model';

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
    switch(value) {
      case 'Vegetables':
        return 'Frutas y verduras';
      case 'Sauces':
        return 'Salsas y aceites';
      case 'Bread':
        return 'Pan y cereales';
      case 'Dairy':
        return 'Huevos, lácteos y derivados';
      case 'Meat':
        return 'Carne y embutidos';
      case 'Fish':
        return 'Pescado y marisco';
      case 'Frozen':
        return 'Congelados';
      case 'Vegetarian':
        return 'Vegetariano';
      case 'Snacks':
        return 'Picoteo y chuches';
      case 'Cleaning':
        return 'Limpieza y aseo';
      case 'Pets':
        return 'Mascotas';
    }
  }
}

@Pipe({ name: 'foodStuffExpirationType'})
export class FoodStuffExpirationType implements PipeTransform {
  transform(value: FoodExpirationType): string {
    switch(value) {
      case 'Imperisable':
        return 'Imperecedero';
      case 'Long-lasting':
        return 'Larga';
      case 'Short-lasting':
        return 'Corta';
      case 'Day-lasting':
        return 'En el día';
    }

  }
}
