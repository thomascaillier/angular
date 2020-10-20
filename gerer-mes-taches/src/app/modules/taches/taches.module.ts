import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TachesRoutingModule } from './taches-routing.module';
import { ListeTachesComponent } from './components/liste-taches/liste-taches.component';
import { ImportantDirective } from './shared/directives/important.directive';
import { TacheComponent } from './components/tache/tache.component';
import { AjoutTacheComponent } from './components/ajout-tache/ajout-tache.component';


@NgModule({
  declarations: [ListeTachesComponent, ImportantDirective, TacheComponent, AjoutTacheComponent],
  imports: [
    CommonModule,
    TachesRoutingModule
  ]
})
export class TachesModule { }
