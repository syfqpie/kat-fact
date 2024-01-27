import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: `
		<footer
			class="flex flex-row p-4 justify-between
			items-center text-white/60 text-sm">
			<div class="ms-3">
				<p class="inline">
					{{ today | date: "yyyy" }}
					All rights reserved ©
				</p>

				<a
					href="https://github.com/syfqpie"
					class="font-semibold hover:text-amber-600 focus:underline"
					target="_blank">
					syfqpie
				</a>
			</div>

			<div class="ms-auto">
				<a
					href="https://github.com/syfqpie/kat-fact"
					class="py-1.5 px-3 text-sm rounded-lg
					bg-amber-600/30 text-amber-600 font-semibold
					focus:ring focus:ring-amber-600/20"
					target="_blank">
					<i class="ri-github-line"></i>
				</a>
			</div>
		</footer>
	`,
	styles: []
})
export class FooterComponent {
	today: Date = new Date()
}
