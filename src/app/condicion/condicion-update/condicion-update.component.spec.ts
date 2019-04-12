import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionUpdateComponent } from './condicion-update.component';

describe('CondicionUpdateComponent', () => {
  let component: CondicionUpdateComponent;
  let fixture: ComponentFixture<CondicionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
