import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatFact } from 'src/app/shared/services/cat-fact/cat-fact.model';
import { CatFactService } from 'src/app/shared/services/cat-fact/cat-fact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // Data
  fact: CatFact | undefined
  imgPath: string = 'assets/img/cat-emoticons/1.png'

  // Subscriber
  subscription: Subscription | undefined

  // Checker
  isFetching: boolean = false

  constructor(
    private catFactSvc: CatFactService
  ) { }

  ngOnInit(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  getData() {
    this.isFetching = true
    this.subscription = this.catFactSvc.getFact().subscribe(
      () => {
        this.isFetching = false
      },
      () => {
        this.isFetching = true
      },
      () => {
        const randomId = Math.floor(Math.random() * (45 - 1) + 1)
        this.imgPath = String(`assets/img/cat-emoticons/${ randomId }.png`)

        this.fact = this.catFactSvc.fact
      }
    )
  }

}
