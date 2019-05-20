import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProyectoComponent } from './listar-proyecto/listar-proyecto.component';
import { DetailProyectoComponent } from './detail-proyecto/detail-proyecto.component';
import { CreateProyectoComponent } from './create-proyecto/create-proyecto.component';
import { UpdateProyectoComponent } from './update-proyecto/update-proyecto.component';
import { DeleteProyectoComponent } from './delete-proyecto/delete-proyecto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarProyectoComponent, DetailProyectoComponent, CreateProyectoComponent, UpdateProyectoComponent, DeleteProyectoComponent]
})
export class ProyectoModule { }
