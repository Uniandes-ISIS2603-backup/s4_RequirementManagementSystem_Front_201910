import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarStartComponent } from './mostrar-start/mostrar-start.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MostrarStartComponent],
  exports: [MostrarStartComponent]
})
export class StartModule { }
