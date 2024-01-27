import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PublicRoutes } from './public.routing';
import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FactComponent } from './components/fact/fact.component';

@NgModule({
	declarations: [
		HomeComponent,
		PublicComponent,
		FooterComponent,
		HeaderComponent,
		FactComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(PublicRoutes),
	]
})
export class PublicModule { }
