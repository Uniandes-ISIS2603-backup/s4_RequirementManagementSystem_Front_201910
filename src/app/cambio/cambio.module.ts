import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCambioComponent } from './create-cambio/create-cambio.component';
import { ListarCambioComponent } from './listar-cambio/listar-cambio.component';
import { DetailCambioComponent } from './detail-cambio/detail-cambio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateCambioComponent, ListarCambioComponent, DetailCambioComponent]
})
export class CambioModule { }
