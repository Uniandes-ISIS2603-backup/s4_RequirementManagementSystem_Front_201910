import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProyectoComponent } from './detail-proyecto.component';

describe('DetailProyectoComponent', () => {
  let component: DetailProyectoComponent;
  let fixture: ComponentFixture<DetailProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
