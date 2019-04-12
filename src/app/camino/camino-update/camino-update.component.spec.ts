import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminoUpdateComponent } from './camino-update.component';

describe('CaminoUpdateComponent', () => {
  let component: CaminoUpdateComponent;
  let fixture: ComponentFixture<CaminoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
