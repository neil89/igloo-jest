import { Component, OnInit } from '@angular/core';
import { FoodStuff } from '../models/food.model';
import { FridgeService } from './fridge.service';


@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss'],
})
export class FridgeComponent implements OnInit {

  public items: FoodStuff[] = [];
  public class = '';

  public imgSrc: string[] = [];

  constructor(
    private fridgeService: FridgeService
  ) { }

  public ngOnInit(): void {
    this.getItems();
  }

  private getItems() {

    const peppers: FoodStuff = {
      id: '1',
      amount: 2,
      units: 'units',
      name: 'Pimientos',
      group: 'Vegetables',
      expirationType: 'Short-lasting'
    };
    const ham: FoodStuff = {
      id: '2',
      amount: 1,
      units: 'package',
      name: 'Jamón cocido',
      group: 'Meat',
      expirationType: 'Long-lasting'
    };

    let dbFoodStuff;
    let f: FoodStuff;
    this.fridgeService.getProductsStuff().subscribe( food => {
      dbFoodStuff = food;
      f = {
        id: food[0].id,
        amount: food[0].amount,
        units: food[0].units,
        name: food[0].name,
        group: food[0].group,
        expirationType: food[0].expirationType
      };

      const v1 = f === peppers;
      const v2 = Object.entries(f).toString() === Object.entries(peppers).toString();
    });


    this.fridgeService.getProductStuffImages(peppers.name).subscribe((result) => {
      this.imgSrc = result.results.map((idx: any) => idx.urls.regular);
      console.log(result);
    });

    this.items.push(peppers);
    this.items.push(ham);
  }

}
