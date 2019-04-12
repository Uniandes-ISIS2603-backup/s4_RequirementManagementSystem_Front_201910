import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminoDetailComponent } from './camino-detail.component';

describe('CaminoDetailComponent', () => {
  let component: CaminoDetailComponent;
  let fixture: ComponentFixture<CaminoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
