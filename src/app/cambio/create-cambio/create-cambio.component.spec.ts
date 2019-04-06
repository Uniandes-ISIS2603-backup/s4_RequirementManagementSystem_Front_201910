import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCambioComponent } from './create-cambio.component';

describe('CreateCambioComponent', () => {
  let component: CreateCambioComponent;
  let fixture: ComponentFixture<CreateCambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
