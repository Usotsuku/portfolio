import { Routes } from '@angular/router';

export const mainFrameRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main.frame').then((m) => m.MainFrame),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage)
      }
    ]
  }
];
