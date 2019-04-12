import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondicionListComponent } from './condicion-list/condicion-list.component';
import { CondicionDetailComponent } from './condicion-detail/condicion-detail.component';
import { CondicionService } from './condicion.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CondicionCreateComponent } from './condicion-create/condicion-create.component';
import { CondicionUpdateComponent } from './condicion-update/condicion-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * The module that has all the components (create, get-all, get and update) of the conditions of the Requirement Management System.
 */
@NgModule({
  imports: [
    CommonModule, AppRoutingModule, FormsModule, NgbModule
  ],
  declarations: [CondicionListComponent, CondicionDetailComponent, CondicionCreateComponent, CondicionUpdateComponent],
  providers: [CondicionService],
  exports: [CondicionListComponent, CondicionDetailComponent]

})
export class CondicionModule { }
