import { Routes } from '@angular/router';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { Product } from './app/models/product.model';

export const routes: Routes = [
  { path: '', component: ProductListComponent }
];
