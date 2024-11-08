import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path:'register',
    component: ProductsFormComponent
  }
];
