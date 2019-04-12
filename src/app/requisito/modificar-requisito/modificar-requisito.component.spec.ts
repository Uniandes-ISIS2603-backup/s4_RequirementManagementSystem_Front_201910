import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRequisitoComponent } from './modificar-requisito.component';

describe('ModificarRequisitoComponent', () => {
  let component: ModificarRequisitoComponent;
  let fixture: ComponentFixture<ModificarRequisitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarRequisitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
