import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarObjetivoComponent } from './listar-objetivo/listar-objetivo.component';
import { ListarObjetivoDetailComponent } from './listar-objetivo-detail/listar-objetivo-detail.component';
import { CrearObjetivoComponent } from './crear-objetivo/crear-objetivo.component';
import { UpdateObjetivoComponent } from './update-objetivo/update-objetivo.component';
import { FormsModule } from '@angular/forms';
import { ObjetivoService } from './objetivo.service';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ListarObjetivoComponent, ListarObjetivoDetailComponent, CrearObjetivoComponent, UpdateObjetivoComponent],
  exports: [ListarObjetivoComponent, ListarObjetivoDetailComponent, CrearObjetivoComponent, UpdateObjetivoComponent],
  providers: [ObjetivoService]
})
export class ObjetivoModule { }
