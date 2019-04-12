import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodeusoListComponent } from './casodeuso-list/casodeuso-list.component';
import { CasodeusoService } from './casodeuso.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CasodeusoDetailComponent } from './casodeuso-detail/casodeuso-detail.component';
import { FormsModule } from '@angular/forms';
import { CasodeusoCreateComponent } from './casodeuso-create/casodeuso-create.component';
import { CasodeusoUpdateComponent } from './casodeuso-update/casodeuso-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * The module that has all the components (create, get-all, get and update) of the cases of use of the Requirement Management System.
 */
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [CasodeusoListComponent,CasodeusoDetailComponent, CasodeusoCreateComponent, CasodeusoUpdateComponent],
  providers: [CasodeusoService],
  exports: [CasodeusoListComponent, CasodeusoDetailComponent, CasodeusoCreateComponent]
})
export class CasodeusoModule { }
