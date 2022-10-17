import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { combineLatest, Observable, of } from 'rxjs';
import { first, map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/firestore';
import {
  FoodExpirationTypeModel,
  FoodGroupModel,
  FoodStoragePlaceModel,
  FoodStuffFSDocumentModel,
  FoodStuffExpandedModel,
  FoodExpirationType
} from '../models/food.model';
import { Timestamp } from 'firebase/firestore';


const unsplashSearchPhotosAPI = 'https://api.unsplash.com/search/photos';

@Injectable({
  providedIn: 'root'
})

export class FridgeService {

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  getFoodsStuff() {
    return this.firestore
      .collection<FoodStuffFSDocumentModel>('FoodStuff')
      .valueChanges({ idField: 'id' });
  }

  getFoodsStuffExpanded() {
    let parent;

    return this.firestore
      .collection<FoodStuffFSDocumentModel>('FoodStuff')
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap(data => {
          parent = data;

          const expirationTypes$ = parent.map(d => {
            const path = `FoodExpirationType/${d.expirationType}`;
            return this.firestore.doc(path).valueChanges();
          });
          const groups$ = parent.map(d => {
            const path = `FoodGroup/${d.group}`;
            return this.firestore.doc(path).valueChanges();
          });

          const storagePlaces$ = parent.map(d => {
            const path = `FoodStoragePlace/${d.storagedIn}`;
            return this.firestore.doc(path).valueChanges();
          });

          return combineLatest([...expirationTypes$, ...groups$, ...storagePlaces$]).pipe(
            map((subColls) => (
              {
                expirationTypes: subColls.slice(0, parent.length),
                groups: subColls.slice(parent.length, parent.length*2),
                storagePlaces: subColls.slice(parent.length*2)
              }
            ))
          );
        }),
        map( (subCollections) => {
          if( subCollections.expirationTypes?.length === parent.length &&
              subCollections.groups?.length === parent.length &&
              subCollections.storagePlaces?.length === parent.length ) {
            parent.forEach((x, i) => {
              if( !!x.creationDate.seconds && !!x.creationDate.nanoseconds ) {
                x.creationDate = x.creationDate.toDate(x.creationDate);
              }
              x.expirationType = subCollections.expirationTypes[i];
              x.expirationDateEstimated = x.expirationDateEstimated
                ?? this.calculateExpirationDateEstimated(x.creationDate, x.expirationType.name);
              x.group = subCollections.groups[i];
              x.storagedIn = subCollections.storagePlaces[i];
            });
            return parent as FoodStuffExpandedModel[];
          }
        }),
      );

  }

  getFoodExpirationTypes(): Observable<FoodExpirationTypeModel[]> {
    return this.firestore
      .collection<FoodExpirationTypeModel>('FoodExpirationType')
      .valueChanges({ idField: 'id' })
      .pipe(first());
  }

  getFoodGroups(): Observable<FoodGroupModel[]> {
    return this.firestore
      .collection<FoodGroupModel>('FoodGroup')
      .valueChanges({ idField: 'id' })
      .pipe(first());
  }

  getFoodStoragePlaces(): Observable<FoodStoragePlaceModel[]> {
    return this.firestore
      .collection<FoodStoragePlaceModel>('FoodStoragePlace')
      .valueChanges({ idField: 'id' })
      .pipe(first());
    }

  getProductStuffImages(keyword: string): Observable<any> {
    const url = `${this.getUnsplashURLWithClientId()}&query=${keyword}`;

    return this.http.get<any>(url)
      .pipe(
        tap(data =>
          console.log('getProductStuff: ' +
          JSON.stringify(data))
        )
      );
  }

  private getUnsplashURLWithClientId(): string {
    return `${unsplashSearchPhotosAPI}?client_id=${environment.unsplashAccess}`;
    return '';
  }

  private calculateExpirationDateEstimated(creationDate: Date, expirationType: FoodExpirationType) {
    const expirationDateEstimated = creationDate;
    switch(expirationType) {
      case 'imperisable':
        expirationDateEstimated.setDate(creationDate.getDate()+ 60);
        break;
      case 'long-lasting':
        expirationDateEstimated.setDate(creationDate.getDate()+ 21);
        break;
      case 'short-lasting':
        expirationDateEstimated.setDate(creationDate.getDate()+ 7);
        break;
      case 'day-lasting':
        expirationDateEstimated.setDate(creationDate.getDate()+ 2);
        break;
    }

    return expirationDateEstimated;
  }
}

