import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { canDeactivateGuard } from '../../guards/can-deactivate.guard';

export const HELLO_ROUTES: Routes = [
  { 
    path: 'hello/:id', 
    component: HelloComponent,
    canDeactivate: [canDeactivateGuard]
  }
];