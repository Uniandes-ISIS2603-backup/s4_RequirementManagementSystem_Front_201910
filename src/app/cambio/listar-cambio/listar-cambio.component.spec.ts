import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCambioComponent } from './listar-cambio.component';

describe('ListarCambioComponent', () => {
  let component: ListarCambioComponent;
  let fixture: ComponentFixture<ListarCambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
