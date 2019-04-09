import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStakeholderComponent } from './update-stakeholder.component';

describe('UpdateStakeholderComponent', () => {
  let component: UpdateStakeholderComponent;
  let fixture: ComponentFixture<UpdateStakeholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStakeholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStakeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
