import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
//import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import * as firebase from 'firebase/app';
import { FoodStuff } from '../models/food.model';


const unsplashSearchPhotosAPI = 'https://api.unsplash.com/search/photos';

// @Injectable({
//   providedIn: 'root'
// })

export class FridgeService {

  // constructor(
  //   private http: HttpClient,
  //   private db: AngularFirestore
  // ) { }

  // getProductsStuff() {
  //   return this.db
  //     .collection<FoodStuff>('FoodStuff')
  //     .valueChanges({ idField: 'id' });
  // }

  // getProductStuffImages(keyword: string): Observable<any> {
  //   const url = `${this.getUnsplashURLWithClientId()}&query=${keyword}`;

  //   return this.http.get<any>(url)
  //     .pipe(
  //       tap(data =>
  //         console.log('getProductStuff: ' +
  //         JSON.stringify(data))
  //       )
  //     );
  // }

  // private getUnsplashURLWithClientId(): string {
  //   //return `${unsplashSearchPhotosAPI}?client_id=${environment.unsplashAccess}`;
  //   return '';
  // }
}

