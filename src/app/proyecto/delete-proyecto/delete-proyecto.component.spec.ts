import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProyectoComponent } from './delete-proyecto.component';

describe('DeleteProyectoComponent', () => {
  let component: DeleteProyectoComponent;
  let fixture: ComponentFixture<DeleteProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
