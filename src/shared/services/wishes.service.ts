import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { WishItem } from '../models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishesService {
  constructor(private http: HttpClient) {}

  private getStandardOptions() {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getWishes() {
    const options = this.getStandardOptions();

    return this.http
      .get<WishItem[]>('http://localhost:3000/wishes', options)
      .pipe(catchError((error) => this.onError(error, 'GET')));
  }

  addWish(wish: WishItem & { id?: number }) {
    const options = this.getStandardOptions();

    return this.http
      .post('http://localhost:3000/wishes', wish, options)
      .pipe(catchError((error) => this.onError(error, 'POST')));
  }

  private onError(error: HttpErrorResponse, requestType: string) {
    if (error.status === 0) {
      console.error(
        `There is an error with the client or network for ${requestType} request`,
        error.error
      );
    } else {
      console.error(
        `There is an error with the server for ${requestType} request`,
        error.error
      );
    }

    //this is wrapped in throwError to return an observable that will evaluate to the error
    return throwError(
      () =>
        new Error(
          `Cannot ${
            requestType === 'GET' ? 'get wishes from' : 'post wishes to'
          } the server please try again`
        )
    );
  }
}
