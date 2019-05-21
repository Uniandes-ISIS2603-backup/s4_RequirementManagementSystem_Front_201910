import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMenuComponent } from './mostrar-menu.component';

describe('MostrarMenuComponent', () => {
  let component: MostrarMenuComponent;
  let fixture: ComponentFixture<MostrarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
