import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminoListComponent } from './camino-list.component';

describe('CaminoListComponent', () => {
  let component: CaminoListComponent;
  let fixture: ComponentFixture<CaminoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
