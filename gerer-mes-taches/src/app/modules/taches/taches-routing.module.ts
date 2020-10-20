import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutTacheComponent } from './components/ajout-tache/ajout-tache.component';
import { ListeTachesComponent } from './components/liste-taches/liste-taches.component';


const routes: Routes = [
  { path: "lister", component: ListeTachesComponent, pathMatch: 'full' },
  { path: "ajouter", component: AjoutTacheComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'lister', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TachesRoutingModule { }
