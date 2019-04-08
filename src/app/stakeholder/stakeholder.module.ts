import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {StakeholderListComponent} from './stakeholder-list/Stakeholder-list.component';
import {StakeholderReviewComponent} from './Stakeholder-reviews/Stakeholder-review.component';
import {StakeholderCreateComponent} from './Stakeholder-create/Stakeholder-create.component';
import {StakeholderDetailComponent} from './stakeholder-detail/stakeholder-detail.component';
import {StakeholderAddReviewComponent} from './Stakeholder-add-review/Stakeholder-add-review.component';
import {StakeholderEditComponent} from './stakeholder-edit/Stakeholder-edit.component';

import {StakeholderService} from './stakeholder.service';

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
    declarations: [
        StakeholderListComponent, StakeholderDetailComponent, StakeholderReviewComponent, StakeholderCreateComponent, StakeholderAddReviewComponent, StakeholderEditComponent
    ],
    providers: [StakeholderService],
    exports: [StakeholderListComponent, StakeholderEditComponent]
})
export class StakeholderModule {}
