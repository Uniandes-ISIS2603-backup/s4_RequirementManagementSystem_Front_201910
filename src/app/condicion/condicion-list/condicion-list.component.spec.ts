import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionListComponent } from './condicion-list.component';

describe('CondicionListComponent', () => {
  let component: CondicionListComponent;
  let fixture: ComponentFixture<CondicionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
