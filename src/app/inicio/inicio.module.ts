import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInicioComponent } from './listar-inicio/listar-inicio.component';
import { CambioModule } from '../cambio/cambio.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';


@NgModule({
  imports: [
    CommonModule, CambioModule, AppRoutingModule
  ],
  declarations: [ListarInicioComponent],
  exports: [ListarInicioComponent]
})
export class InicioModule { }
