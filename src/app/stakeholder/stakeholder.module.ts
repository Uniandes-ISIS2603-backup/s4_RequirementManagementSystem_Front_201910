import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CreateStakeholderComponent } from './create-stakeholder/create-stakeholder.component';
import { ListarStakeholderComponent } from './listar-stakeholder/listar-stakeholder.component';
import { StakeholderService } from './stakeholder.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPermissionsModule
  ],
  declarations: [CreateStakeholderComponent, ListarStakeholderComponent],
  providers: [StakeholderService],
  exports: [CreateStakeholderComponent, ListarStakeholderComponent]
})
export class StakeholderModule { }
