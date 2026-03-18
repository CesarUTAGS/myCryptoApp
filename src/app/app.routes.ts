import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'home', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
  { path: 'details', loadComponent: () => import('./pages/details/details.page').then(m => m.DetailsPage) },
  { path: 'profile', loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage) },
  { path: 'about', loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage) },
];