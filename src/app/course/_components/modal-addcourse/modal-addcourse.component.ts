import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


import { CourseService } from '../../_services/course.service';

@Component({
  selector: 'app-course-modal-addcourse',
  templateUrl: './modal-addcourse.component.html',
  styleUrls: ['./modal-addcourse.component.css']
})
export class ModalAddcourseComponent implements OnInit {

  @Input() modalRef: BsModalRef;

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
  });

  constructor(
    private servCourse: CourseService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalRef.hide();
  }

  saveUser() {
    if (this.form.invalid) { return; }

    this.servCourse.addCourse(this.form.getRawValue()).subscribe(response => {
      if (response.status === true) {
        Swal.fire('Cool!', 'Course added successfully', 'success');
        this.form.reset();
        this.closeModal();
      } else {
        Swal.fire('Oops..', response.message, 'error');
      }
    });
  }

}
