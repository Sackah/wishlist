import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, storeItems } from '../services/products.service';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products!: storeItems[];
  productSubscription!: Subscription;

  constructor(private store: ProductsService) {}

  ngOnInit(): void {
    this.productSubscription = this.store
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
    console.log('unsubscribed from products service');
  }
}
