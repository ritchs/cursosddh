import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddpartiComponent } from './modal-addparti.component';

describe('ModalAddpartiComponent', () => {
  let component: ModalAddpartiComponent;
  let fixture: ComponentFixture<ModalAddpartiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddpartiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddpartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
