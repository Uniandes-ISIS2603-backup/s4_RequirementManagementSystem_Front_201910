import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CreateOrganizacionComponent } from './create-organizacion/create-organizacion.component';
import { ListarOrganizacionComponent } from './listar-organizacion/listar-organizacion.component';
import { EliminarOrganizacionComponent } from './eliminar-organizacion/eliminar-organizacion.component';
import { OrganizacionService } from './organizacion.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPermissionsModule
  ],
  declarations: [CreateOrganizacionComponent, ListarOrganizacionComponent, EliminarOrganizacionComponent],
  providers: [OrganizacionService],
  exports: [CreateOrganizacionComponent, ListarOrganizacionComponent, EliminarOrganizacionComponent]
})
export class OrganizacionModule { }
