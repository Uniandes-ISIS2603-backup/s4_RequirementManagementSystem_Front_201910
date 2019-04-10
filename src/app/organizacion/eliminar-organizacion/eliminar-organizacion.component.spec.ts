import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarOrganizacionComponent } from './eliminar-organizacion.component';

describe('EliminarOrganizacionComponent', () => {
  let component: EliminarOrganizacionComponent;
  let fixture: ComponentFixture<EliminarOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
