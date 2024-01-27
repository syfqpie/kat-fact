import { Component } from '@angular/core';

@Component({
	selector: 'app-public',
	template: `
		<div class="min-h-screen w-screen px-20 flex flex-col bg-zinc-900 text-white">
			<app-header></app-header>
			<div class="flex-grow">
				<router-outlet></router-outlet>
			</div>
			<app-footer></app-footer>
		</div>
	`,
	styles: []
})
export class PublicComponent {

}
