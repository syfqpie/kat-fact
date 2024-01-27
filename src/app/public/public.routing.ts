import { Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const PublicRoutes: Routes = [
	{
		path: '',
		component: PublicComponent,
		children: [
			{
				path: '',
				component: HomeComponent,
			},
			{
				path: 'about',
				component: AboutComponent
			}
		]
	}
]
