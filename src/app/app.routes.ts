import { Routes } from '@angular/router';

export const routes: Routes = [
  // Define your routes here
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'tools',
    loadComponent: () => import('./pages/tools/tools').then((m) => m.Tools),
  },
  {
    path: 'tools/marketing',
    loadComponent: () =>
      import('./pages/tools/marketing/marketing').then((m) => m.Marketing),
  }, 
  {
    path: 'tools/persona',
    loadComponent: () =>
      import('./pages/tools/persona/persona').then((m) => m.Persona),
  },
  {
    path: 'tools/moodboard',
    loadComponent: () =>
      import('./pages/tools/moodboard/moodboard').then((m) => m.Moodboard),
  }, 
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing').then((m) => m.Pricing),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
];
