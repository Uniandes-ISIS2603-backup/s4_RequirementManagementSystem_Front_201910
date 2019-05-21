import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarStartComponent } from './mostrar-start.component';

describe('MostrarStartComponent', () => {
  let component: MostrarStartComponent;
  let fixture: ComponentFixture<MostrarStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
