import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { CourseService } from '../../_services/course.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courseList: any;

  @ViewChild('templateModalCourse', null) tmpModalCourse: TemplateRef<any>;
  modalRef: BsModalRef;

  constructor(
    private servCourse: CourseService,
    private modal: BsModalService
  ) { }

  ngOnInit() {
    this.servCourse.getCourse().subscribe(response => {
      this.courseList = this.parseData(response.data);
    });
  }

  showCourseModal() {
    const modalOptions: ModalOptions = {
      ignoreBackdropClick: true,
      keyboard: true
    };

    this.modalRef = this.modal.show(this.tmpModalCourse, modalOptions);
  }

  private parseData(data: any) {
    const parsedArray = [];

    //delete(data[0]);

    for (const index in data) {
      if (data[index]) {
        parsedArray.push(data[index]);
      }
    }

    return parsedArray;
  }

}
