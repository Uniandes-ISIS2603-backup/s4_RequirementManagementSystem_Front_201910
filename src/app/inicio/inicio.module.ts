import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInicioComponent } from './listar-inicio/listar-inicio.component';
import { CambioModule } from '../cambio/cambio.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {StakeholderModule} from '../stakeholder/stakeholder.module'

@NgModule({
  imports: [
    CommonModule, CambioModule, AppRoutingModule, StakeholderModule
  ],
  declarations: [ListarInicioComponent],
  exports: [ListarInicioComponent]
})
export class InicioModule { }
