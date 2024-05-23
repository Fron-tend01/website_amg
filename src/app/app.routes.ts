// app.routes.ts
import { Routes } from '@angular/router';
import { RootPageComponent } from './pages/root-page/root-page.component';

export const routes: Routes = [
    {
        path: 'root',
        component: RootPageComponent,
        canActivate: [], 
        
      },
      
      {
        path: '', // Default route
        redirectTo: '/root',
        pathMatch: 'full'
      }
];
