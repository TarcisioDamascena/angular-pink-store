import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ManageComponent } from './pages/manage/manage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'dashboard',
    component: ManageComponent
  },
];
