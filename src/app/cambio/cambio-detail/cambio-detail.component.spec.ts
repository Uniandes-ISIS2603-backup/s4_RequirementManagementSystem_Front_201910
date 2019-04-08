import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioDetailComponent } from './cambio-detail.component';

describe('CambioDetailComponent', () => {
  let component: CambioDetailComponent;
  let fixture: ComponentFixture<CambioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
