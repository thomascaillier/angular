import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { TachesService } from 'src/app/modules/shared/services/taches.service';

@Component({
  selector: 'app-ajout-tache',
  templateUrl: './ajout-tache.component.html',
  styleUrls: []
})
export class AjoutTacheComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription()

  model: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    detail: new FormControl(''),
    date: new FormControl(''),
    isImportant: new FormControl(false)
  })

  private nouvelIdentifiantSubject: ReplaySubject<number> = new ReplaySubject()
  nouvelIdentifiant$: Observable<number> = this.nouvelIdentifiantSubject.asObservable()

  constructor(private router: Router, private tachesService: TachesService) { }

  ngOnInit(): void {
    this.model.valueChanges.subscribe(value => {
      console.log("Status : " + this.model.status)
      console.log(this.model.value)
    })
  }

  ajouter(): void {
    if (this.model.valid) {
      this.subscription.add(this.tachesService.create(this.model.getRawValue()).subscribe(id => {
        console.log(id)
        this.nouvelIdentifiantSubject.next(id)
        this.router.navigate(["/taches"], {})
      }))
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
