import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminoCreateComponent } from './camino-create.component';

describe('CaminoCreateComponent', () => {
  let component: CaminoCreateComponent;
  let fixture: ComponentFixture<CaminoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
