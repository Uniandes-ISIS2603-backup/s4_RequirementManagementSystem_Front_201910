import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasodeusoListComponent } from './casodeuso-list.component';

describe('CasodeusoListComponent', () => {
  let component: CasodeusoListComponent;
  let fixture: ComponentFixture<CasodeusoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasodeusoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasodeusoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
