import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarObjetivoComponent } from './listar-objetivo/listar-objetivo.component';
import { ListarObjetivoDetailComponent } from './listar-objetivo-detail/listar-objetivo-detail.component';
import { CrearObjetivoComponent } from './crear-objetivo/crear-objetivo.component';
import { UpdateObjetivoComponent } from './update-objetivo/update-objetivo.component';
import { DeleteObjetivoComponent } from './delete-objetivo/delete-objetivo.component';
import { FormsModule } from '@angular/forms';
import { ObjetivoService } from './objetivo.service';




@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListarObjetivoComponent, ListarObjetivoDetailComponent, CrearObjetivoComponent, UpdateObjetivoComponent, DeleteObjetivoComponent],
  exports: [ListarObjetivoComponent, ListarObjetivoDetailComponent, CrearObjetivoComponent, UpdateObjetivoComponent, DeleteObjetivoComponent],
  providers: [ObjetivoService]
})
export class ObjetivoModule { }
