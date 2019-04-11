import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAprobacionComponent } from './update-aprobacion.component';

describe('UpdateAprobacionComponent', () => {
  let component: UpdateAprobacionComponent;
  let fixture: ComponentFixture<UpdateAprobacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAprobacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
