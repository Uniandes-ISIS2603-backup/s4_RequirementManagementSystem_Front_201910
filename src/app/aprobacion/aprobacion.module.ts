import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAprobacionComponent } from './create-aprobacion/create-aprobacion.component';
import { ListarAprobacionComponent } from './listar-aprobacion/listar-aprobacion.component';
import { DetailAprobacionComponent } from './detail-aprobacion/detail-aprobacion.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AprobacionService } from './aprobacion.service';
import { UpdateAprobacionComponent } from './update-aprobacion/update-aprobacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**
 * The module that has all the components (create, get-all, get and update) of the approbations of the Requirement Management System.
 */
@NgModule({
  imports: [
    CommonModule, AppRoutingModule, FormsModule, NgbModule
  ],
  declarations: [CreateAprobacionComponent, ListarAprobacionComponent, DetailAprobacionComponent, UpdateAprobacionComponent],
  providers: [AprobacionService],
  exports: [CreateAprobacionComponent, ListarAprobacionComponent, DetailAprobacionComponent]
})
export class AprobacionModule { }
