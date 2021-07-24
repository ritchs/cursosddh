import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddplaceComponent } from './modal-addplace.component';

describe('ModalAddplaceComponent', () => {
  let component: ModalAddplaceComponent;
  let fixture: ComponentFixture<ModalAddplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
