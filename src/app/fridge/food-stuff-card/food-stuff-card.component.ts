/* eslint-disable @ngrx/avoid-dispatching-multiple-actions-sequentially */
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFlip } from 'swiper';

import { FoodStuffExpandedModel } from 'src/app/models/food.model';
import { FoodCollectionsActions, FridgeActions } from '../store';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFlip]);


@Component({
  selector: 'app-food-stuff-card',
  templateUrl: './food-stuff-card.component.html',
  styleUrls: ['./food-stuff-card.component.scss']
})
export class FoodStuffCardComponent implements OnInit {

  @Input() public item: FoodStuffExpandedModel;
  public isOpenEditFoodStuff = false;

  /*
    Añadir elipsis al título de las cards comprobando el height del h1
    y viendo si es mayor que el height de ion-card-title. Si lo es,
    añadir '...'
   */

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public setActive(ev): void {
    this.store.dispatch(FoodCollectionsActions.loadAllFoodCollections());
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
