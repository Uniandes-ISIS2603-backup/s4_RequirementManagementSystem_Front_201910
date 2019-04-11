import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateObjetivoComponent } from './update-objetivo.component';

describe('UpdateObjetivoComponent', () => {
  let component: UpdateObjetivoComponent;
  let fixture: ComponentFixture<UpdateObjetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateObjetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
