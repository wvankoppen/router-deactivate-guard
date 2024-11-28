import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      <a routerLink="/" class="nav-link">Home</a>
      <a routerLink="/about" class="nav-link">About</a>
      <a routerLink="/hello/1" class="nav-link">Hello</a>
    </nav>
  `,
  styles: [`
    nav {
      padding: 1rem;
      background-color: #f5f5f5;
      margin-bottom: 1rem;
    }
    .nav-link {
      margin-right: 1rem;
      text-decoration: none;
      color: #333;
    }
    .nav-link:hover {
      text-decoration: underline;
    }
  `]
})
export class NavMenuComponent {}