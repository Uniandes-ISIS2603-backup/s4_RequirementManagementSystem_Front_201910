import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAprobacionComponent } from './listar-aprobacion.component';

describe('ListarAprobacionComponent', () => {
  let component: ListarAprobacionComponent;
  let fixture: ComponentFixture<ListarAprobacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAprobacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
