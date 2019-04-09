import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodeusoListComponent } from './casodeuso-list/casodeuso-list.component';
import { CasodeusoService } from './casodeuso.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CasodeusoDetailComponent } from './casodeuso-detail/casodeuso-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [CasodeusoListComponent,CasodeusoDetailComponent],
  providers: [CasodeusoService],
  exports: [CasodeusoListComponent]
})
export class CasodeusoModule { }
