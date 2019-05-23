import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProyectoOrganizacionComponent } from './proyecto-organizacion.component';

describe('AgregarProyectoOrganizacionComponent', () => {
  let component: AgregarProyectoOrganizacionComponent;
  let fixture: ComponentFixture<AgregarProyectoOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarProyectoOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProyectoOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
