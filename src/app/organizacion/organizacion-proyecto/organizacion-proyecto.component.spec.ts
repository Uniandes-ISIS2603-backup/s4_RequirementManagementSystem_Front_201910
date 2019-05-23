import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionProyectoComponent } from './organizacion-proyecto.component';

describe('OrganizacionProyectoComponent', () => {
  let component: OrganizacionProyectoComponent;
  let fixture: ComponentFixture<OrganizacionProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
