import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TachesService } from 'src/app/modules/shared/services/taches.service';
import { Tache } from '../../shared/interfaces/tache';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: []
})
export class ListeTachesComponent implements OnInit {

  taches$: Observable<Tache[]>
  selectedTaches: number[] = []

  unsubscribe: Subscription = new Subscription()

  constructor(private tachesService: TachesService) { }

  ngOnInit(): void {
    this.taches$ = this.tachesService.taches$
    this.tachesService.readAll()
  }

  ngOnDestroy(): void {
    if (this.unsubscribe != null) {
      this.unsubscribe.unsubscribe()
    }
  }

  toggleSelectedTache(id: number): void {
    if (this.selectedTaches.includes(id)) {
      this.selectedTaches = this.selectedTaches.filter(i => i != id)
    } else {
      this.selectedTaches.push(id)
    }
  }

  supprimer(): void {
    this.selectedTaches.forEach(t =>
      this.tachesService.delete(t)
    );
  }

  filter(filter: string): void {
    this.tachesService.filter(filter)
  }

}
