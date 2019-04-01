import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrsListComponent } from './drs-list/drs-list.component';
import { DrsCreateComponent } from './drs-create/drs-create.component';

@NgModule({
  declarations: [DrsListComponent, DrsCreateComponent],
  imports: [
    CommonModule
  ]
})
export class DRSModule { }
