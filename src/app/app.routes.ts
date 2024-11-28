import { Routes } from '@angular/router';
import { HOME_ROUTES } from './features/home/home.routes';
import { ABOUT_ROUTES } from './features/about/about.routes';
import { HELLO_ROUTES } from './features/hello/hello.routes';

export const routes: Routes = [
  ...HOME_ROUTES,
  ...ABOUT_ROUTES,
  ...HELLO_ROUTES,
  { path: '**', redirectTo: '' }
];