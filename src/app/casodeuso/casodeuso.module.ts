import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodeusoListComponent } from "./casodeuso-list/casodeuso-list.component";

@NgModule({
  declarations: [CasodeusoListComponent],
  imports: [
    CommonModule
  ],
  exports: [CasodeusoListComponent]
})
export class CasodeusoModule { }
