import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from 'src/app/stakeholder/stakeholder-detail/node_modules/src/app/stakeholder/organizacion-list/node_modules/@angular/router';

import {AppModule} from '../../app.module';
import { StakeholderEditComponent } from './stakeholder-edit.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {StakeholderService} from '../stakeholder.service';
import {Stakeholder} from '../stakeholder';

describe('StakeholderEditComponent', () => {
  let component: StakeholderEditComponent;
    let fixture: ComponentFixture<StakeholderEditComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                StakeholderService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StakeholderEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
