import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, RouterOutlet, withComponentInputBinding} from '@angular/router';
import { routes } from './app/app.routes';
import { NavMenuComponent } from './app/layout/nav-menu.component';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-menu></app-nav-menu>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet, NavMenuComponent],
  standalone: true
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes,withComponentInputBinding())]
});
