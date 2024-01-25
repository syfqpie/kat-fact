import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PublicRoutes } from './public.router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicRoutes)
  ]
})
export class PublicModule { }
