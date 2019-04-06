import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAprobacionComponent } from './create-aprobacion/create-aprobacion.component';
import { ListarAprobacionComponent } from './listar-aprobacion/listar-aprobacion.component';
import { DetailAprobacionComponent } from './detail-aprobacion/detail-aprobacion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateAprobacionComponent, ListarAprobacionComponent, DetailAprobacionComponent],
  exports: [CreateAprobacionComponent]
})
export class AprobacionModule { }
