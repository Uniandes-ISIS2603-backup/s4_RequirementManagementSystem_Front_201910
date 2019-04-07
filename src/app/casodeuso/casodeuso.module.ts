import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCasodeusoComponent } from './list-casodeuso/list-casodeuso.component';
import { CasodeusoService } from './casodeuso.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListCasodeusoComponent],
  providers: [CasodeusoService],
  exports: [ListCasodeusoComponent]
})
export class CasodeusoModule { }
