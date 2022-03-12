import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

const routes: Routes = [
  // Default
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () => import('./core/public/public.module').then(m => m.PublicModule)
  },
  // Not found
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
