import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FoodStuffModel } from 'src/app/models/food.model';
import { FridgeActions } from '../store';

@Component({
  selector: 'app-detail-food-stuff',
  templateUrl: './detail-food-stuff.component.html',
  styleUrls: ['./detail-food-stuff.component.scss']
})
export class DetailFoodStuffComponent implements OnInit {

  @Input() public item: FoodStuffModel;
  public isEditing = false;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public closeModal(ev) {
    this.store.dispatch(FridgeActions.closeDetailFoodStuff());
  }
}
