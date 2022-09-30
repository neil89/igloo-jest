import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { FoodStuff } from '../../models/food.model';
import { FridgeService } from '../fridge.service';
import { FridgeActions, selectActiveFoodStuff, selectFoodsStuffList, selectOpenDetailFoodStuff } from '../store';


@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss'],
})

export class FridgeComponent implements OnInit, OnDestroy {

  public items: FoodStuff[] = [];
  public items$: Observable<FoodStuff[]> = null;
  public imgSrc: string[] = [];
  public activeFood$;
  public openFoodStuffDetails$;

  private readonly clearSubscriptions$: Subject<void> = new Subject();

  constructor(
    private store: Store,
    private fridgeService: FridgeService
  ) { }

  public ngOnInit(): void {
    this.activeFood$ = this.store.select(selectActiveFoodStuff);
    this.openFoodStuffDetails$ = this.store.select(selectOpenDetailFoodStuff);
/*
    this.openFoodStuffDetails$.subscribe( r => {
      console.log(r);
      openViewDetailModal
    });*/

    this.getItems();
  }

  public ngOnDestroy(): void {
    this.clearSubscriptions$.next();
    this.clearSubscriptions$.complete();
  }

  public closeDetailModal() {
    this.store.dispatch(FridgeActions.closeDetailFoodStuff());
  }


  private getItems() {

    // const peppers: FoodStuff = {
    //   id: '1',
    //   amount: 2,
    //   units: 'units',
    //   name: 'Pimientos',
    //   group: 'Vegetables',
    //   expirationType: 'Short-lasting'
    // };
    // const ham: FoodStuff = {
    //   id: '2',
    //   amount: 1,
    //   units: 'package',
    //   name: 'Jamón cocido',
    //   group: 'Meat',
    //   expirationType: 'Long-lasting'
    // };

    ////////////////////////////////////////////////
    // this.fridgeService.getFoodsStuff()
    //   .pipe(takeUntil(this.clearSubscriptions$))
    //   .subscribe( food => {
    //     this.items = [];
    //     if( food?.length > 0 ) {
    //       food.forEach( (f) => {
    //         this.items.push( {
    //           id: f.id,
    //           amount: f.amount,
    //           units: f.units,
    //           name: f.name,
    //           group: f.group,
    //           expirationType: f.expirationType
    //         } as FoodStuff );
    //       });
    //     }
    // });
    this.store.dispatch(FridgeActions.loadFoodsStuff());
    this.items$ = this.store.select(selectFoodsStuffList);



    // this.fridgeService.getProductStuffImages(peppers.name).subscribe((result) => {
    //   this.imgSrc = result.results.map((idx: any) => idx.urls.regular);
    //   console.log(result);
    // });

    // this.items.push(peppers);
    // this.items.push(ham);
  }
}
