/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { CustomError } from 'src/app/models/error.model';
import { FridgeService } from '../../fridge.service';
import { FridgeActions } from '../actions';

@Injectable()
export class FridgeEffects {

  constructor(
    private actions$: Actions,
    private fridgeService: FridgeService
  ) {}

  loadFoodsStuff$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(FridgeActions.loadFoodsStuff),
        mergeMap(() => this.fridgeService.getFoodsStuff()
        .pipe(
          map(foodsStuff => FridgeActions.loadFoodsStuffSuccess({foodsStuff})),
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

}
