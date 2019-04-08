import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCambioComponent } from './listar-cambio/listar-cambio.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CambioService } from './cambio.service';
import { CambioDetailComponent } from './cambio-detail/cambio-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, FormsModule
  ],
  declarations: [ ListarCambioComponent, CambioDetailComponent],
  providers: [CambioService],
  exports: [ListarCambioComponent, CambioDetailComponent]
})
export class CambioModule { }
