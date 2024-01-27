import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { CatFact } from './api.model';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private factSubject: BehaviorSubject<CatFact | null> = new BehaviorSubject<CatFact | null>(null)
	public fact: Observable<CatFact | null>

	constructor(
		private http: HttpClient
	) {
		this.fact = this.factSubject.asObservable()
	}

	getRandomFact(): Observable<CatFact> {
		const urlTemp = `${environment.baseApiUrl}fact/`
		return this.http.get<CatFact>(urlTemp).pipe(
			tap((res) => { this.factSubject.next(res) })
		)
	}
}
