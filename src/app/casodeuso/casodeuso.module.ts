import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodeusoListComponent } from './casodeuso-list/casodeuso-list.component';
import { CasodeusoService } from './casodeuso.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CasodeusoDetailComponent } from './casodeuso-detail/casodeuso-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [CasodeusoListComponent,CasodeusoDetailComponent],
  providers: [CasodeusoService],
  exports: [CasodeusoListComponent, CasodeusoDetailComponent]
})
export class CasodeusoModule { }
