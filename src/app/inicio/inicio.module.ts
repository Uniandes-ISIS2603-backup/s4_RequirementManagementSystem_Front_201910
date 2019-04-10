import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInicioComponent } from './listar-inicio/listar-inicio.component';
import { CambioModule } from '../cambio/cambio.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {CasodeusoModule} from '../casodeuso/casodeuso.module';
import {StakeholderModule} from '../stakeholder/stakeholder.module';
import {CondicionModule} from '../condicion/condicion.module';

@NgModule({
  imports: [
    CommonModule, CambioModule, AppRoutingModule, StakeholderModule, CasodeusoModule, CondicionModule
  ],
  declarations: [ListarInicioComponent],
  exports: [ListarInicioComponent]
})
export class InicioModule { }
