import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoDetailComponent } from './requisito-detail.component';

describe('RequisitoDetailComponent', () => {
  let component: RequisitoDetailComponent;
  let fixture: ComponentFixture<RequisitoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
