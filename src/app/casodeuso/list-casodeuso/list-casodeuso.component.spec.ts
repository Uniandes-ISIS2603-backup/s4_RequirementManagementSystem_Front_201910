import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasodeusoComponent } from './list-casodeuso.component';

describe('ListCasodeusoComponent', () => {
  let component: ListCasodeusoComponent;
  let fixture: ComponentFixture<ListCasodeusoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCasodeusoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCasodeusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
