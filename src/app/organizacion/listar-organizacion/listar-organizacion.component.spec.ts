import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrganizacionComponent } from './listar-organizacion.component';

describe('ListarOrganizacionComponent', () => {
  let component: ListarOrganizacionComponent;
  let fixture: ComponentFixture<ListarOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
