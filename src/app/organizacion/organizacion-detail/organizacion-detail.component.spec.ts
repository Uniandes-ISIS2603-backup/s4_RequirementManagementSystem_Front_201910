import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionDetailComponent } from './organizacion-detail.component';

describe('OrganizacionDetailComponent', () => {
  let component: OrganizacionDetailComponent;
  let fixture: ComponentFixture<OrganizacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
