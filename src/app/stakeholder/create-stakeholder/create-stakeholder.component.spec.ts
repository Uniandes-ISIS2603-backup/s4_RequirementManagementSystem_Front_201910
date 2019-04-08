import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStakeholderComponent } from './create-stakeholder.component';

describe('CreateStakeholderComponent', () => {
  let component: CreateStakeholderComponent;
  let fixture: ComponentFixture<CreateStakeholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStakeholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStakeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
