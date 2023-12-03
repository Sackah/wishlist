import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, storeItems } from '../services/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(private store: ProductsService, private route: ActivatedRoute) {}

  product: storeItems | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');

      if (id) {
        this.store.getProduct(parseInt(id, 10)).subscribe((item) => {
          this.product = item;
        });
      }
    });
  }
}
