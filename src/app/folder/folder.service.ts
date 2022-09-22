import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(
    private http: HttpClient,
  ) {}

  getProductStuffImages(keyword: string): Observable<any> {
    const url = 'https://api.unsplash.com/search/photos?client_id=T1lJeysGboFnPf8noN3XynxJ61liJvcrVWq0jUw8wCg&query=pimientos';

    return this.http.get<any>(url)
      .pipe(
        tap(data =>
          console.log('getProductStuff: ' +
          JSON.stringify(data))
        )
      );
  }
}
