import { Component } from '@angular/core';
import { COOL_CAT } from '../../public.constant';

@Component({
  selector: 'app-header',
  template: `
    <nav class="flex flex-row w-full p-4 justify-between items-center">
		<a href="#" class="font-semibold hover:text-amber-600">
			<img
				alt="logo"
				class="inline-block h-12 w-12"
				[src]="logoPath" />
			katFact
		</a>

		<ul class="mb-0 ms-auto">
			<li>
				<button
					class="py-1 px-3 text-sm rounded-lg
					bg-amber-600/30 text-amber-600 font-semibold
					focus:ring focus:ring-amber-600/20"
					[routerLink]="['/about']"
					[routerLinkActive]="['active']">
					<i class="ri-code-block"></i>
			</button>
			</li>
		</ul>
	</nav>
  `,
  styles: []
})
export class HeaderComponent {
	public logoPath = COOL_CAT
}
