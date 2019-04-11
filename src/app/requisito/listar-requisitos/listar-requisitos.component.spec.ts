import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRequisitosComponent } from './listar-requisitos.component';

describe('ListarRequisitosComponent', () => {
  let component: ListarRequisitosComponent;
  let fixture: ComponentFixture<ListarRequisitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRequisitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
