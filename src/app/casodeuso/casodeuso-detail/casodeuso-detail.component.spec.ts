import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasodeusoDetailComponent } from './casodeuso-detail.component';

describe('CasodeusoDetailComponent', () => {
  let component: CasodeusoDetailComponent;
  let fixture: ComponentFixture<CasodeusoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasodeusoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasodeusoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
