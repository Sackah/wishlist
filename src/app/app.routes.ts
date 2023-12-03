import { Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: WishComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
