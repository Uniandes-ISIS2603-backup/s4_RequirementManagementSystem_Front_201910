import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarRequisitosComponent } from './listar-requisitos/listar-requisitos.component';
import { RequisitoDetailComponent } from './requisito-detail/requisito-detail.component';
import { RequisitoService } from './requisito.service';
import { CrearRequisitoComponent } from './crear-requisito/crear-requisito.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModificarRequisitoComponent } from './modificar-requisito/modificar-requisito.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ListarRequisitosComponent, RequisitoDetailComponent, CrearRequisitoComponent, ModificarRequisitoComponent],
  exports: [ListarRequisitosComponent, RequisitoDetailComponent],
  providers: [RequisitoService]
})
/**
 * Módulo principal que contiene todos los servicios y componentes necesarios para la correcta implementación de los requerimientos funcionales de rRquisito. 
 */
export class RequisitoModule { }
