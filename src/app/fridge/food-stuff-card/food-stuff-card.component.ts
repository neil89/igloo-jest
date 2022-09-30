import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { FoodStuff } from 'src/app/models/food.model';
import { selectActiveFoodStuff, selectActiveFoodStuffName } from '../store';
import { FridgeActions } from '../store';

@Component({
  selector: 'app-food-stuff-card',
  templateUrl: './food-stuff-card.component.html',
  styleUrls: ['./food-stuff-card.component.scss']
})
export class FoodStuffCardComponent implements OnInit {

  @Input() public item: FoodStuff;
  public isOpenEditFoodStuff = false;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public setActive(ev): void {
    this.store.dispatch(FridgeActions.setFoodStuffActive({ foodId: this.item.id }));
    this.isOpenEditFoodStuff = true;

    //this.activeFood = this.store.select(selectActiveFoodStuffName);
  }

  public unsetActive(): void {
    this.isOpenEditFoodStuff = false;
  }

  public onClickViewDetail(): void {
    this.store.dispatch(FridgeActions.openDetailFoodStuff({ foodId: this.item.id }));
  }

}
