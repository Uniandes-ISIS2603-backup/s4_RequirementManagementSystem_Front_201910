import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrsCreateComponent } from './drs-create.component';

describe('DrsCreateComponent', () => {
  let component: DrsCreateComponent;
  let fixture: ComponentFixture<DrsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
