import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioUpdateComponent } from './cambio-update.component';

describe('CambioUpdateComponent', () => {
  let component: CambioUpdateComponent;
  let fixture: ComponentFixture<CambioUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
