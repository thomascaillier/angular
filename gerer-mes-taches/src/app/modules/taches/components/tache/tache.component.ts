import { Component, OnInit, Input } from '@angular/core';
import { Tache } from '../../shared/interfaces/tache';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: []
})
export class TacheComponent implements OnInit {

  @Input() tache: Tache;

  constructor() { }

  ngOnInit(): void {
  }

}
