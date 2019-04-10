import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionDetailComponent } from './condicion-detail.component';

describe('CondicionDetailComponent', () => {
  let component: CondicionDetailComponent;
  let fixture: ComponentFixture<CondicionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
