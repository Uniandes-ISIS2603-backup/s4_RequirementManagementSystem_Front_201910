import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarRequisitosComponent } from './listar-requisitos/listar-requisitos.component';
import { RequisitoDetailComponent } from './requisito-detail/requisito-detail.component';
import { RequisitoService } from './requisito.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarRequisitosComponent, RequisitoDetailComponent],
  exports: [ListarRequisitosComponent, RequisitoDetailComponent],
  providers: [RequisitoService]
})
export class RequisitoModule { }
