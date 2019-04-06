import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAprobacionComponent } from './create-aprobacion.component';

describe('CreateAprobacionComponent', () => {
  let component: CreateAprobacionComponent;
  let fixture: ComponentFixture<CreateAprobacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAprobacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
