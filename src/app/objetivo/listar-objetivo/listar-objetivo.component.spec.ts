import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarObjetivoComponent } from './listar-objetivo.component';

describe('ListarObjetivoComponent', () => {
  let component: ListarObjetivoComponent;
  let fixture: ComponentFixture<ListarObjetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarObjetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
