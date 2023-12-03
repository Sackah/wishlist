import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export type storeItems = {
  name: string;
  price: number;
  id: number;
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private data: storeItems[] = [
    {
      name: 'Guitar',
      price: 1000,
      id: 1,
    },
    {
      name: 'Piano',
      price: 5000,
      id: 2,
    },
    {
      name: 'Drums',
      price: 1200,
      id: 3,
    },
  ];

  constructor() {}

  // of from rxjs creates an observable
  getAllProducts() {
    return of(this.data);
  }

  getProduct(id: number) {
    return of(this.data.find((item) => item.id === id));
  }
}
