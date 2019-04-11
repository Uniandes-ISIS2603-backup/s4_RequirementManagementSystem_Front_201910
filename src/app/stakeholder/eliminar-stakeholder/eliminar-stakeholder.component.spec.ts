import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarStakeholderComponent } from './eliminar-stakeholder.component';

describe('EliminarStakeholderComponent', () => {
  let component: EliminarStakeholderComponent;
  let fixture: ComponentFixture<EliminarStakeholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarStakeholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarStakeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
