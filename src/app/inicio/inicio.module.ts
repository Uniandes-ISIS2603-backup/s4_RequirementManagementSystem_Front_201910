import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInicioComponent } from './listar-inicio/listar-inicio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarInicioComponent],
  exports: [ListarInicioComponent]
})
export class InicioModule { }
