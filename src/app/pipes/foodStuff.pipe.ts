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
