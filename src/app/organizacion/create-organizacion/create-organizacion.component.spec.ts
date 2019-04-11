import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganizacionComponent } from './create-organizacion.component';

describe('CreateOrganizacionComponent', () => {
  let component: CreateOrganizacionComponent;
  let fixture: ComponentFixture<CreateOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
