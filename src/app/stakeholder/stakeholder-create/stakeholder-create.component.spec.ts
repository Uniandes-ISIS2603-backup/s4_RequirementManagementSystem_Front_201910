import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { StakeholderCreateComponent } from './stakeholder-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {StakeholderService} from '../stakeholder.service';
import {Stakeholder} from '../stakeholder';


describe('StakeholderCreateComponent', () => {
 let component: StakeholderCreateComponent;
    let fixture: ComponentFixture<StakeholderCreateComponent>;
    
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
        fixture = TestBed.createComponent(StakeholderCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
