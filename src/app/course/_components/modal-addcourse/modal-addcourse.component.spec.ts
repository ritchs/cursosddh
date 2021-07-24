import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddcourseComponent } from './modal-addcourse.component';

describe('ModalAddcourseComponent', () => {
  let component: ModalAddcourseComponent;
  let fixture: ComponentFixture<ModalAddcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
