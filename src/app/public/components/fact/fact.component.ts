import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CatFact } from '../../services/api.model';

const DEFAULT_ICON = 'assets/img/default/dead-cat.png'

@Component({
	selector: 'app-fact',
	template: `
	<div class="mt-40 md:mt-20 w-72  md:w-96 p-4 border rounded-lg
		shadow sm:p-6 bg-zinc-800 border-zinc-700/20 transition-all">
		<div class="flex items-center justify-center
			text-center text-white w-full">
			<div>
				<div class="-mt-[6rem] bg-zinc-800 p-2
					rounded-full w-44 mx-auto border-t
					border-t-zinc-700/20">
					<img [src]="imgPath"
						alt="cat-icons"
						class="w-40 h-40" />
				</div>

				<h5 class="ms-1 text-xl font-normal text-zinc-400 mb-3 w-full">
					<span *ngIf="fact; else noDataTpl">
						{{ fact.fact }}
					</span>

					<ng-template #noDataTpl>
						<span>
							No data yet
						</span>
					</ng-template>
				</h5>

				<button class="py-1 px-3 text-sm rounded-lg
						enabled:bg-amber-600/30 enabled:text-amber-600 font-semibold
						focus:ring focus:ring-amber-600/20 disabled:bg-amber-600/10
						disabled:text-amber-600/50"
						[disabled]="isLoading"
						(click)="getData()">
					<i class="ri-loop-right-fill inline-block"
						[ngClass]="{ 'animate-spin': isLoading }">
					</i>

					<span *ngIf="!isLoading; else loadingBtnTpl">
						More
					</span>

					<ng-template #loadingBtnTpl>
						<span>
							Meow meow
						</span>
					</ng-template>
				</button>
			</div>
		</div>
	</div>
	`,
	styles: []
})
export class FactComponent implements OnInit, OnDestroy {
	fact: CatFact | null = null
	imgPath = DEFAULT_ICON
	isLoading = false

	subscription: Subscription = new Subscription

	ngOnInit(): void {
		this.getData()
	}

	ngOnDestroy(): void {
		if (this.subscription) this.subscription.unsubscribe()
	}

	public getData() {
		// get data
		this.isLoading = true
		this.imgPath = this.getImagePath()
	}

	private getImagePath() {
		const randomId = Math.floor(Math.random() * (45 - 1) + 1)
        return String(`assets/img/cat-emoticons/${ randomId }.png`)
	}
}
