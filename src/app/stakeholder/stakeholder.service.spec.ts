import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Stakeholder} from './stakeholder';
import {StakeholderService} from './stakeholder.service';
import {AppModule} from '../app.module';


describe('Service: StakeholderService', () => {
    let injector: TestBed;
    let service: StakeholderService;
	const Stakeholders: Stakeholder[] = require('../../assets/Stakeholders.json');
	const reviews: Review[] = require('../../assets/reviews.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, StakeholderService]
        });
        injector = getTestBed();
        service = injector.get(StakeholderService);
    });
	
	it('#getStakeholders should return value from observable',
    (done: DoneFn) => {
    service.getStakeholders().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
    it('#createStakeholder should return value from observable',
    (done: DoneFn) => {
   let Stakeholder:Stakeholder = {id:0,name:"Prueba",isbn:"987612345",publishingdate: "2017/01/06",image:"Prueba",description:"Prueba",editorial:{ id: 100, name: "Oveja Negra"}};
    service.createStakeholder(Stakeholder).subscribe(value => {
        expect(value.name).toEqual(Stakeholder.name);
        done();
        });
    });
	
	it('#getStakeholderDetail should return value from observable',
    (done: DoneFn) => {
    service.getStakeholderDetail(Stakeholders[0].id).subscribe(value => {
        expect(value.name).toEqual(Stakeholders[0].name);
        done();
        });
    });
	it('#createReview should return value from observable',
    (done: DoneFn) => {
    service.createReview(Stakeholders[0].id,reviews[0]).subscribe(value => {
        expect(value.name).toEqual(reviews[0].name);
        done();
        });
    });
	
	it('#updateStakeholder should return the Stakeholder updated',
    (done: DoneFn) => {
	let Stakeholder:Stakeholder = {id:100,name:"Prueba",isbn:"987612345",publishingdate: "2017/01/06",image:"Prueba",description:"Prueba",editorial:{ id: 100, name: "Oveja Negra"}};
    service.updateStakeholder(Stakeholder).subscribe(value => {
        expect(value.name).toEqual(Stakeholder.name);
        done();
        });
    });
    
});