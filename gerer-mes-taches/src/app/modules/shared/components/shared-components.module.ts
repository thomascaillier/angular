import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResearchBarComponent } from './research-bar/research-bar.component';



@NgModule({
  declarations: [ResearchBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ResearchBarComponent
  ]
})
export class SharedComponentsModule { }
