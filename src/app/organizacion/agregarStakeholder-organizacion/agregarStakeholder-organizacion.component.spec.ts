import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarStakeholderOrganizacionComponent } from './agregarStakeholder-organizacion.component';

describe('AgregarStakeholderOrganizacionComponent', () => {
  let component: AgregarStakeholderOrganizacionComponent;
  let fixture: ComponentFixture<AgregarStakeholderOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarStakeholderOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarStakeholderOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
