import { Component, OnInit } from '@angular/core';
import { Tache } from '../../shared/interfaces/tache';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: []
})
export class ListeTachesComponent implements OnInit {

  taches: Tache[];

  constructor() { }

  ngOnInit(): void {
    this.taches = [
      { libelle: "Acheter une voiture", isImportant: false },
      { libelle: "Quitter ma femme", isImportant: true },
      { libelle: "Arrêter la bière", isImportant: false }
    ];
  }

}
