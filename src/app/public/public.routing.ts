import { Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';

export const PublicRoutes: Routes = [
	{
		path: '',
		component: PublicComponent,
		children: [
			{
				path: '',
				component: HomeComponent,
			}
		]
	}
]
