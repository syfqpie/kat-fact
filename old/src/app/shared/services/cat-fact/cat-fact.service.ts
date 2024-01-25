import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CatFact, Breed } from './cat-fact.model';
import { Observable } from 'rxjs';

const baseUrl = `${environment.catFactBaseUrl}`

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  // Data
  public fact: CatFact | undefined
  public facts: CatFact[] = []
  public breeds: Breed[] = []

  constructor(
    private http: HttpClient
  ) { }

  getFact(): Observable<CatFact> {
    const urlTemp = `${ baseUrl }fact/`
    return this.http.get<CatFact>(urlTemp).pipe(
      tap((res: CatFact) => {
        this.fact = res
        // console.log('Fact', this.fact)
      })
    )
  }

  getFacts(): Observable<CatFact[]> {
    const urlTemp = `${ baseUrl }facts/`
    return this.http.get<CatFact[]>(urlTemp).pipe(
      tap((res: CatFact[]) => {
        this.facts = res
        // console.log('Facts', this.facts)
      })
    )
  }

  getBreeds(): Observable<Breed[]> {
    const urlTemp = `${ baseUrl }breeds/`
    return this.http.get<Breed[]>(urlTemp).pipe(
      tap((res: Breed[]) => {
        this.breeds = res
        // console.log('Breeds', this.breeds)
      })
    )
  }

}
