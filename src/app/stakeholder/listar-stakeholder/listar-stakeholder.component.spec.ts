import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarStakeholderComponent } from './listar-stakeholder.component';

describe('ListarStakeholderComponent', () => {
  let component: ListarStakeholderComponent;
  let fixture: ComponentFixture<ListarStakeholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarStakeholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarStakeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
