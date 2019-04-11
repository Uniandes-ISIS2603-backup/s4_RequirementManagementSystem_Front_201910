import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarObjetivoDetailComponent } from './listar-objetivo-detail.component';

describe('ListarObjetivoDetailComponent', () => {
  let component: ListarObjetivoDetailComponent;
  let fixture: ComponentFixture<ListarObjetivoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarObjetivoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarObjetivoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
