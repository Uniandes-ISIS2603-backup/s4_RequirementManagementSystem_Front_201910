import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarObjetivosComponent } from './listar-objetivos.component';

describe('ListarObjetivosComponent', () => {
  let component: ListarObjetivosComponent;
  let fixture: ComponentFixture<ListarObjetivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarObjetivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
