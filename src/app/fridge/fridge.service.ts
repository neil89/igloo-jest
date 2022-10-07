import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';
import { FoodExpirationTypeModel, FoodGroupModel, FoodStoragePlaceModel, FoodStuffModel } from '../models/food.model';


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
      .collection<FoodStuffModel>('FoodStuff')
      .valueChanges({ idField: 'id' });
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
}

