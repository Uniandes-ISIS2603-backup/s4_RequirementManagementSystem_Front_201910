import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondicionListComponent } from './condicion-list/condicion-list.component';

@NgModule({
  declarations: [CondicionListComponent],
  imports: [
    CommonModule
  ],
  exports: [CondicionListComponent]
})
export class CondicionModule { }
