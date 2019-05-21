import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarMenuComponent } from './mostrar-menu/mostrar-menu.component';
import { InicioModule } from '../inicio/inicio.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, InicioModule, RouterModule
  ],
  declarations: [MostrarMenuComponent],
  exports: [MostrarMenuComponent]
})
export class MenuModule { }
