import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, storeItems } from '../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products!: storeItems[];

  constructor(private store: ProductsService) {}

  ngOnInit(): void {
    this.store.getAllProducts().subscribe((data) => (this.products = data));
  }
}
