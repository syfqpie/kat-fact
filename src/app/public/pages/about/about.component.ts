import { Component } from '@angular/core';

import { environment } from 'src/environments/environment';
import { COOL_CAT } from '../../public.constant';

@Component({
	selector: 'app-about',
	template: `
	<div class="flex justify-center">
		<div class="mt-40 md:mt-20 w-72 md:w-96 p-4 border-2 rounded-lg
			shadow sm:p-6 border-amber-700/20 transition-all shadow-amber-600/30">
			<div class="flex items-center justify-center
				text-center text-white w-full">
				<div>
					<div class="-mt-[6rem] p-2
						rounded-full w-44 mx-auto border-t-2
						border-t-amber-700/20">
						<img alt="cat-icons"
							class="w-40 h-40"
							[src]="logoPath" />
					</div>

					<h5 class="text-xl font-normal text-zinc-100 w-full">
						Just a simple app for all cat lovers!
					</h5>

					<p class="text-zinc-100/80 mb-3">
						{{ appVersion }}
					</p>

					<button class="py-1 px-3 text-sm rounded-lg
						enabled:bg-amber-600/30 enabled:text-amber-600 font-semibold
						focus:ring focus:ring-amber-600/20 disabled:bg-amber-600/10
						disabled:text-amber-600/50"
						[routerLink]="['/']">
						<i class="ri-home-6-line inline-block"></i>

						<span>
							Home
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
	`,
	styleUrls: ['./about.component.css']
})
export class AboutComponent {
	public logoPath = COOL_CAT
	public appVersion = environment.appVersion
}
