import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PublicRoutes } from './public.routing';
import { HomeComponent } from './pages/home/home.component';
import { PublicComponent } from './public.component';

@NgModule({
	declarations: [
		HomeComponent,
		PublicComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(PublicRoutes),
	]
})
export class PublicModule { }
