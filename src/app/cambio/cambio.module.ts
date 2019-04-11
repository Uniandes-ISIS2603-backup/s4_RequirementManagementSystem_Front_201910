import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCambioComponent } from './listar-cambio/listar-cambio.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CambioService } from './cambio.service';
import { CambioDetailComponent } from './cambio-detail/cambio-detail.component';
import { FormsModule } from '@angular/forms';
import { CambioCreateComponent } from './cambio-create/cambio-create.component';
import { CambioUpdateComponent } from './cambio-update/cambio-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**
 * The module that has all the components (create, get-all, get and update) of the changes of the Requirement Management System.
 */
@NgModule({
  imports: [
    CommonModule, AppRoutingModule, FormsModule, NgbModule
  ],
  declarations: [ ListarCambioComponent, CambioDetailComponent, CambioCreateComponent, CambioUpdateComponent],
  providers: [CambioService],
  exports: [ListarCambioComponent, CambioDetailComponent, CambioCreateComponent]
})
export class CambioModule { }
