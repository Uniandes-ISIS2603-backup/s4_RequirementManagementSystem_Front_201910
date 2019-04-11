import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteObjetivoComponent } from './delete-objetivo.component';

describe('DeleteObjetivoComponent', () => {
  let component: DeleteObjetivoComponent;
  let fixture: ComponentFixture<DeleteObjetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteObjetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
