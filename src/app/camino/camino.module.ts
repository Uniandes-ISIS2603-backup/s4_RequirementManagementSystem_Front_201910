import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaminoListComponent } from './camino-list/camino-list.component';
import { CaminoCreateComponent } from './camino-create/camino-create.component';

@NgModule({
  declarations: [CaminoListComponent, CaminoCreateComponent],
  imports: [
    CommonModule
  ]
})
export class CaminoModule { }
