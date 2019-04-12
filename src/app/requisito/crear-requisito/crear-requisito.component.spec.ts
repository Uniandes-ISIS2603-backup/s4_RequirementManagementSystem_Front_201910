import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRequisitoComponent } from './crear-requisito.component';

describe('CrearRequisitoComponent', () => {
  let component: CrearRequisitoComponent;
  let fixture: ComponentFixture<CrearRequisitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRequisitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
