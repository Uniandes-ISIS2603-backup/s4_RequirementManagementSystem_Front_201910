import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ListarProyectoComponent } from './listar-proyecto/listar-proyecto.component';
import { DetailProyectoComponent } from './detail-proyecto/detail-proyecto.component';
import { CreateProyectoComponent } from './create-proyecto/create-proyecto.component';
import { UpdateProyectoComponent } from './update-proyecto/update-proyecto.component';
import { ProyectoService } from './proyecto.service';
import { ObjetivoModule } from '../objetivo/objetivo.module';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ObjetivoModule,
    MenuModule
  ],
  declarations: [ListarProyectoComponent, DetailProyectoComponent, CreateProyectoComponent, UpdateProyectoComponent],
  providers: [ProyectoService],
  exports: [ListarProyectoComponent, DetailProyectoComponent, CreateProyectoComponent]
})
export class ProyectoModule { }
