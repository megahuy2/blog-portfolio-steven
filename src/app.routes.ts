import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // Fix: Corrected lazy-loaded component path.
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Home | Marketer\'s Insight'
  },
  {
    path: 'post/:slug',
    // Fix: Corrected lazy-loaded component path.
    loadComponent: () => import('./pages/post/post.component').then(m => m.PostComponent)
  },
  {
    path: 'about',
    // Fix: Corrected lazy-loaded component path.
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Me | Marketer\'s Insight'
  },
  {
    path: '**',
    redirectTo: ''
  }
];