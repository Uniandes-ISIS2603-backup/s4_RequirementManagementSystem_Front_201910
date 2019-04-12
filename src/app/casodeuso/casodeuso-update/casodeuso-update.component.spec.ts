import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasodeusoUpdateComponent } from './casodeuso-update.component';

describe('CasodeusoUpdateComponent', () => {
  let component: CasodeusoUpdateComponent;
  let fixture: ComponentFixture<CasodeusoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasodeusoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasodeusoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
