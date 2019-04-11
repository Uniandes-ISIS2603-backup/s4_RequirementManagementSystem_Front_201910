import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CreateStakeholderComponent } from './create-stakeholder/create-stakeholder.component';
import { ListarStakeholderComponent } from './listar-stakeholder/listar-stakeholder.component';
import { EliminarStakeholderComponent } from './eliminar-stakeholder/eliminar-stakeholder.component';
import { UpdateStakeholderComponent } from './update-stakeholder/update-stakeholder.component';
import { StakeholderService } from './stakeholder.service';

//Importa, declara los componentes del modulo
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
  declarations: [CreateStakeholderComponent, ListarStakeholderComponent, EliminarStakeholderComponent, UpdateStakeholderComponent],
  providers: [StakeholderService],
  exports: [CreateStakeholderComponent, ListarStakeholderComponent, EliminarStakeholderComponent, UpdateStakeholderComponent]
})
export class StakeholderModule { }
