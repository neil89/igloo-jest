import { Component, Input, OnInit } from '@angular/core';
import { FoodStuff } from 'src/app/models/food.model';

@Component({
  selector: 'app-food-stuff-card',
  templateUrl: './food-stuff-card.component.html',
  styleUrls: ['./food-stuff-card.component.scss']
})
export class FoodStuffCardComponent implements OnInit {

  @Input() public item: FoodStuff;

  constructor() { }

  ngOnInit(): void {
  }

}
