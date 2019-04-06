import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInicioComponent } from './listar-inicio.component';

describe('ListarInicioComponent', () => {
  let component: ListarInicioComponent;
  let fixture: ComponentFixture<ListarInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
