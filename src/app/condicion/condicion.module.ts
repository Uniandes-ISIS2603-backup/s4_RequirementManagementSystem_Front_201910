import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondicionListComponent } from './condicion-list/condicion-list.component';
import { CondicionDetailComponent } from './condicion-detail/condicion-detail.component';
import { CondicionService } from './condicion.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CondicionCreateComponent } from './condicion-create/condicion-create.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, FormsModule
  ],
  declarations: [CondicionListComponent, CondicionDetailComponent, CondicionCreateComponent],
  providers: [CondicionService],
  exports: [CondicionListComponent, CondicionDetailComponent]

})
export class CondicionModule { }
