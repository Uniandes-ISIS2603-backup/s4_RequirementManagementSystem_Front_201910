import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionCreateComponent } from './condicion-create.component';

describe('CondicionCreateComponent', () => {
  let component: CondicionCreateComponent;
  let fixture: ComponentFixture<CondicionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
