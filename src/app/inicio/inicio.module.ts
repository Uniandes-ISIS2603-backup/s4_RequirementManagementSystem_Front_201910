import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInicioComponent } from './listar-inicio/listar-inicio.component';
import { CambioModule } from '../cambio/cambio.module';

@NgModule({
  imports: [
    CommonModule, CambioModule
  ],
  declarations: [ListarInicioComponent],
  exports: [ListarInicioComponent]
})
export class InicioModule { }
