import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./frames/main/main.routes').then((m) => m.mainFrameRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
