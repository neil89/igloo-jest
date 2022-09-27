import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FoodStuff } from 'src/app/models/food.model';

@Component({
  selector: 'app-food-stuff-card',
  templateUrl: './food-stuff-card.component.html',
  styleUrls: ['./food-stuff-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoodStuffCardComponent implements OnInit {

  @Input() public item: FoodStuff;
  public isOpenEditFoodStuff = false;


  constructor() { }

  ngOnInit(): void {
  }

  public setActive(): void {
    this.isOpenEditFoodStuff = true;
  }

  public unsetActive(): void {
    this.isOpenEditFoodStuff = false;
  }

}
