import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAprobacionComponent } from './detail-aprobacion.component';

describe('DetailAprobacionComponent', () => {
  let component: DetailAprobacionComponent;
  let fixture: ComponentFixture<DetailAprobacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAprobacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
