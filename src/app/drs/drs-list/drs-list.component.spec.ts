import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrsListComponent } from './drs-list.component';

describe('DrsListComponent', () => {
  let component: DrsListComponent;
  let fixture: ComponentFixture<DrsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
