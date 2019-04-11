import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodeusoListComponent } from './casodeuso-list/casodeuso-list.component';
import { CasodeusoService } from './casodeuso.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CasodeusoDetailComponent } from './casodeuso-detail/casodeuso-detail.component';
import { FormsModule } from '@angular/forms';
import { CasodeusoCreateComponent } from './casodeuso-create/casodeuso-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [CasodeusoListComponent,CasodeusoDetailComponent, CasodeusoCreateComponent],
  providers: [CasodeusoService],
  exports: [CasodeusoListComponent, CasodeusoDetailComponent, CasodeusoCreateComponent]
})
export class CasodeusoModule { }
