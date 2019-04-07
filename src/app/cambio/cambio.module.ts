import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCambioComponent } from './create-cambio/create-cambio.component';
import { ListarCambioComponent } from './listar-cambio/listar-cambio.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CambioService } from './cambio.service';
import { CambioDetailComponent } from './cambio-detail/cambio-detail.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [CreateCambioComponent, ListarCambioComponent, CambioDetailComponent],
  providers: [CambioService],
  exports: [ListarCambioComponent]
})
export class CambioModule { }
