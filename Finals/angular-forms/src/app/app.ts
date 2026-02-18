import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="glass-header">
      <div class="navbar-container">
        <div class="brand">
          <span class="logo-icon">✨</span>
          <span class="logo-text">Form<span class="highlight">Lab</span></span>
        </div>

        <nav class="nav-links">
          <a routerLink="/template-demo" routerLinkActive="active">Template</a>
          <a routerLink="/reactive-demo" routerLinkActive="active">Reactive</a>
          <a routerLink="/custom-demo" routerLinkActive="active">Custom</a>
        </nav>
      </div>
    </header>

    <main class="content-area">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {}
