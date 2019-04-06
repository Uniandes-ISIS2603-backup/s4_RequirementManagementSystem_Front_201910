import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarObjetivoComponent } from './mostrar-objetivo.component';

describe('MostrarObjetivoComponent', () => {
  let component: MostrarObjetivoComponent;
  let fixture: ComponentFixture<MostrarObjetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarObjetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
