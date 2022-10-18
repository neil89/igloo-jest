import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, forkJoin, Observable, Subject } from 'rxjs';

import { FridgeService } from '../fridge.service';
import {
  FoodExpirationTypeModel,
  FoodGroupModel,
  FoodStoragePlaceModel,
  FoodStuffExpandedModel
} from '../../models/food.model';
import {
  FoodCollectionsActions,
  FridgeActions,
  selectActiveFoodStuff,
  selectFoodExpirationTypes,
  selectFoodGroups,
  selectFoodsStuffExpandedList,
  selectFoodsStuffList,
  selectFoodStoragePlaces,
  selectOpenDetailFoodStuff
} from '../store';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss'],
})

export class FridgeComponent implements OnInit, OnDestroy {

  public items: FoodStuffExpandedModel[] = [];
  public items$: Observable<FoodStuffExpandedModel[]> = null;
  public imgSrc: string[] = [];
  public activeFood$;
  public openFoodStuffDetails$;

  // public foodExpirationTypes$: Observable<FoodExpirationTypeModel[]> = null;
  // public foodGroups$: Observable<FoodGroupModel[]> = null;
  // public foodStoragePlaces$: Observable<FoodStoragePlaceModel[]> = null;
  public foodExpirationTypes: FoodExpirationTypeModel[];
  public foodGroups: FoodGroupModel[];
  public foodStoragePlaces: FoodStoragePlaceModel[];

  private readonly clearSubscriptions$: Subject<void> = new Subject();

  constructor(
    private store: Store
  ) { }

  public ngOnInit(): void {
    this.activeFood$ = this.store.select(selectActiveFoodStuff);
    this.openFoodStuffDetails$ = this.store.select(selectOpenDetailFoodStuff);

    this.store.dispatch(FridgeActions.loadFoodsStuffExpanded());
    this.items$ = this.store.select(selectFoodsStuffExpandedList);
  }

  public ngOnDestroy(): void {
    this.clearSubscriptions$.next();
    this.clearSubscriptions$.complete();
  }

  public closeDetailModal() {
    this.store.dispatch(FridgeActions.closeDetailFoodStuff());
  }


  private loadFoodStuffItems() {

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
    //this.items$ = this.store.select(selectFoodsStuffList);


    // eslint-disable-next-line @ngrx/no-store-subscription
    this.store.select(selectFoodsStuffList)
      .pipe(takeUntil(this.clearSubscriptions$))
      .subscribe(foodsList => {
        if( !!foodsList && foodsList.length > 0 ) {
          this.items = [];
          foodsList.forEach( f => {
            this.items.push({
              id: f.id,
              amount: f.amount,
              units: f.units,
              name: f.name,
              group: this.foodGroups.find(g => g.id === f.group),
              expirationType: this.foodExpirationTypes.find(fEx => fEx.id === f.expirationType),
              expirationDate: f.expirationDate,
              expirationDateEstimated: f.expirationDateEstimated,
              storagedIn: this.foodStoragePlaces.find(fSt => fSt.id === f.storagedIn ),
              creationDate: f.creationDate,
              lastEditDate: f.lastEditDate
            } as FoodStuffExpandedModel);
          });
        }
    });



    // this.fridgeService.getProductStuffImages(peppers.name).subscribe((result) => {
    //   this.imgSrc = result.results.map((idx: any) => idx.urls.regular);
    //   console.log(result);
    // });

    // this.items.push(peppers);
    // this.items.push(ham);
  }

  private initializeFoodModels() {

    // forkJoin(
    //   {
    //     foodExpirationTypes: this.store.select(selectFoodExpirationTypes),
    //     foodGroups: this.store.select(selectFoodGroups),
    //     foodStoragePlaces: this.store.select(selectFoodStoragePlaces)
    //   }
    // ).subscribe( res => {
    combineLatest([
      this.store.select(selectFoodExpirationTypes),
      this.store.select(selectFoodGroups),
      this.store.select(selectFoodStoragePlaces)
    ])
    .subscribe( res => {
      if( res[0].length > 0 &&
        res[1].length > 0 &&
        res[2].length > 0 ) {

        this.foodExpirationTypes = res[0];
        this.foodGroups = res[1];
        this.foodStoragePlaces = res[2];

        this.loadFoodStuffItems();
      }
    });

    this.store.dispatch(FoodCollectionsActions.loadAllFoodCollections());

    // this.store.select(selectFoodExpirationTypes)
    //   .pipe(takeUntil(this.clearSubscriptions$))
    //   .subscribe(foodET => {
    //     this.foodExpirationTypes = foodET;
    // });
    // this.store.select(selectFoodGroups)
    //   .pipe(takeUntil(this.clearSubscriptions$))
    //   .subscribe(foodG => {
    //     this.foodGroups = foodG;
    // });
    // this.store.select(selectFoodStoragePlaces)
    //   .pipe(takeUntil(this.clearSubscriptions$))
    //   .subscribe(foodSP => {
    //     this.foodStoragePlaces = foodSP;
    // });

    // this.foodExpirationTypes$ = this.store.select(selectFoodExpirationTypes);
    // this.foodGroups$ = this.store.select(selectFoodGroups);
    // this.foodStoragePlaces$ = this.store.select(selectFoodStoragePlaces);
  }

}
