import { Component } from '@angular/core';

@Component({
	selector: 'app-public',
	template: `
		<div class="bg-zinc-900 h-screen w-screen">
			<router-outlet></router-outlet>
		</div>
	`,
	styleUrls: ['./public.component.css']
})
export class PublicComponent {

}
