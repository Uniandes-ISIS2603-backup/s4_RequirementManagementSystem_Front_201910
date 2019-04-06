import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCambioComponent } from './detail-cambio.component';

describe('DetailCambioComponent', () => {
  let component: DetailCambioComponent;
  let fixture: ComponentFixture<DetailCambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
