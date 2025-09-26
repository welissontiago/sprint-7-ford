import { Routes } from '@angular/router';
import { HomeComponent } from './coponentes/home/home.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './coponentes/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
];
