import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAprobacionComponent } from './create-aprobacion/create-aprobacion.component';
import { ListarAprobacionComponent } from './listar-aprobacion/listar-aprobacion.component';
import { DetailAprobacionComponent } from './detail-aprobacion/detail-aprobacion.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AprobacionService } from './aprobacion.service';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, FormsModule
  ],
  declarations: [CreateAprobacionComponent, ListarAprobacionComponent, DetailAprobacionComponent],
  providers: [AprobacionService],
  exports: [CreateAprobacionComponent, ListarAprobacionComponent, DetailAprobacionComponent]
})
export class AprobacionModule { }
