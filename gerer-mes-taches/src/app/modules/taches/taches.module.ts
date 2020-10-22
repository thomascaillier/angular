import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataMockService } from 'src/app/mock/data-mock.service';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { SharedServicesModule } from '../shared/services/shared-services.module';
import { AjoutTacheComponent } from './components/ajout-tache/ajout-tache.component';
import { ListeTachesComponent } from './components/liste-taches/liste-taches.component';
import { TacheComponent } from './components/tache/tache.component';
import { ImportantDirective } from './shared/directives/important.directive';
import { TachesRoutingModule } from './taches-routing.module';



@NgModule({
  declarations: [ListeTachesComponent, ImportantDirective, TacheComponent, AjoutTacheComponent],
  imports: [
    CommonModule,
    TachesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    SharedServicesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataMockService)
  ],
})
export class TachesModule { }
