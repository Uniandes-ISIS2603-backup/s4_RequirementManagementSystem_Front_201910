import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarStartComponent } from './mostrar-start/mostrar-start.component';
import { ProyectoModule } from '../proyecto/proyecto.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, ProyectoModule, RouterModule
  ],
  declarations: [MostrarStartComponent],
  exports: [MostrarStartComponent]
})
export class StartModule { }
