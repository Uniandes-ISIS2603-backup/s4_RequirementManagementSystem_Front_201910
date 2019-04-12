import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasodeusoCreateComponent } from './casodeuso-create.component';

describe('CasodeusoCreateComponent', () => {
  let component: CasodeusoCreateComponent;
  let fixture: ComponentFixture<CasodeusoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasodeusoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasodeusoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
