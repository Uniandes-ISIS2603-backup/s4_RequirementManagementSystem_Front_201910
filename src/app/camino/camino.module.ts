import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaminoListComponent } from './camino-list/camino-list.component';
import { CaminoDetailComponent } from './camino-detail/camino-detail.component';
import { CaminoService } from './camino.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CaminoCreateComponent } from './camino-create/camino-create.component';
import { CaminoUpdateComponent } from './camino-update/camino-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * The module that has all the components (create, get-all, get and update) of the caminos of the Requirement Management System.
 */
@NgModule({
  imports: [
    CommonModule, AppRoutingModule, FormsModule, NgbModule
  ],
  declarations: [CaminoListComponent, CaminoDetailComponent, CaminoCreateComponent, CaminoUpdateComponent],
  providers: [CaminoService],
  exports: [CaminoListComponent, CaminoDetailComponent]

})
export class CaminoModule { }
