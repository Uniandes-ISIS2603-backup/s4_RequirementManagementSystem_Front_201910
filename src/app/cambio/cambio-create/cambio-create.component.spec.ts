import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioCreateComponent } from './cambio-create.component';

describe('CambioCreateComponent', () => {
  let component: CambioCreateComponent;
  let fixture: ComponentFixture<CambioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
