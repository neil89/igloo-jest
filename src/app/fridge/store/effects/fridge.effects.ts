/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, map, switchMap, concatMap, delay, exhaustMap, tap } from 'rxjs/operators';
import { CustomError } from 'src/app/models/error.model';
import { FoodExpirationType, FoodExpirationTypeModel, FoodGroupModel, FoodStoragePlaceModel } from 'src/app/models/food.model';
import { FridgeService } from '../../fridge.service';
import { FoodCollectionsActions, FridgeActions } from '../actions';

@Injectable()
export class FridgeEffects {

  constructor(
    private actions$: Actions,
    private fridgeService: FridgeService
  ) {}

  /// FRIDGE EFFECTS
  loadFoodsStuff$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(FridgeActions.loadFoodsStuff),
      mergeMap(() => this.fridgeService.getFoodsStuff()
        .pipe(
          map(foodsStuff => FridgeActions.loadFoodsStuffSuccess({ foodsStuff })),
          catchError(error => {
            const customError = {
              code: undefined,
              httpErrorCode: 0,
              httpErrorMessage: error,
              humanizedErrorMessage: error
            } as CustomError;
            return of(FridgeActions.loadFoodsStuffFail({ error: customError }))
          })
        )
      )
    )
  });


  /// FRIDGE COLLECTIONS EFFECTS
  loadFoodExpirationType$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(FoodCollectionsActions.loadFoodExpirationType),
      mergeMap(() => this.fridgeService.getFoodExpirationTypes()
        .pipe(
          delay(5000),
          map(foodExpirationTypes => FoodCollectionsActions.loadFoodExpirationTypeSuccess({ foodExpirationTypes })),
          catchError(error => {
            const customError = {
              code: undefined,
              httpErrorCode: 0,
              httpErrorMessage: error,
              humanizedErrorMessage: error
            } as CustomError;
            return of(FoodCollectionsActions.loadFoodExpirationTypeFail({ error: customError }))
          })
        )
      )
    )
  });

  loadFoodGroups$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(FoodCollectionsActions.loadFoodGroup),
      mergeMap(() => this.fridgeService.getFoodGroups()
        .pipe(
          map(foodGroups => FoodCollectionsActions.loadFoodGroupSuccess({ foodGroups })),
          catchError(error => {
            const customError = {
              code: undefined,
              httpErrorCode: 0,
              httpErrorMessage: error,
              humanizedErrorMessage: error
            } as CustomError;
            return of(FoodCollectionsActions.loadFoodGroupFail({ error: customError }))
          })
        )
      )
    )
  });

  loadFoodStoragePlace$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(FoodCollectionsActions.loadFoodStoragePlace),
      mergeMap(() => this.fridgeService.getFoodStoragePlaces()
        .pipe(
          map(foodStoragePlaces => FoodCollectionsActions.loadFoodStoragePlaceSuccess({ foodStoragePlaces })),
          catchError(error => {
            const customError = {
              code: undefined,
              httpErrorCode: 0,
              httpErrorMessage: error,
              humanizedErrorMessage: error
            } as CustomError;
            return of(FoodCollectionsActions.loadFoodStoragePlaceFail({ error: customError }))
          })
        )
      )
    )
  });

  loadAllFoodCollections$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(FoodCollectionsActions.loadAllFoodCollections),
      mergeMap(() => this.fridgeService.getFoodExpirationTypes()
        .pipe(
          map( (foodExpirationTypes: FoodExpirationTypeModel[] ) => [foodExpirationTypes])
        )
      ),
      mergeMap(([foodExpirationTypes]: [FoodExpirationTypeModel[]]) =>
        this.fridgeService.getFoodGroups()
        .pipe(
          map( (foodGroups: FoodGroupModel[]) => [foodExpirationTypes, foodGroups])
        )
      ),
      mergeMap(([foodExpirationTypes, foodGroups]: [FoodExpirationTypeModel[], FoodGroupModel[]]) =>
        this.fridgeService.getFoodStoragePlaces()
        .pipe(
          map( (foodStoragePlaces: FoodStoragePlaceModel[]) =>
            FoodCollectionsActions.loadAllFoodCollectionsSuccess({
              foodExpirationTypes,
              foodGroups,
              foodStoragePlaces
            })
          ),
          catchError(error => {
            const customError = {
              code: undefined,
              httpErrorCode: 0,
              httpErrorMessage: error,
              humanizedErrorMessage: error
            } as CustomError;
            return of(FoodCollectionsActions.loadAllFoodCollectionsFail({ error: customError }))
          })
        )
      )
    )
  });
}
