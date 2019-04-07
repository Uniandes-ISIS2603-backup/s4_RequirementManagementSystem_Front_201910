import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {StakeholderListComponent} from './stakeholder-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {StakeholderService} from '../stakeholder.service';
import {Stakeholder} from '../stakeholder';

describe('StakeholderListComponent', () => {
    let component: StakeholderListComponent;
    let fixture: ComponentFixture<StakeholderListComponent>;
    const Stakeholders: Stakeholder[] = require('../../../assets/Stakeholders.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, StakeholderService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StakeholderListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of Stakeholders', () => {
        component.Stakeholders = Stakeholders;
        expect(component.Stakeholders.length).toEqual(Stakeholders.length);
    });

    it('a Stakeholder should be a Stakeholder (first and last)', () => {
        component.Stakeholders = Stakeholders;
        //revisar todos los libros
        expect(component.Stakeholders[0].name).toEqual(Stakeholders[0].name);
        expect(component.Stakeholders[Stakeholders.length - 1].name).toEqual(Stakeholders[Stakeholders.length - 1].name);
    });
});