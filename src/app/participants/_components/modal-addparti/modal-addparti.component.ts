import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import * as moment from 'moment';

import { ParticipantsService } from '../../_services/participants.service';

@Component({
  selector: 'app-participants-modal-addparti',
  templateUrl: './modal-addparti.component.html',
  styleUrls: ['./modal-addparti.component.css']
})
export class ModalAddpartiComponent implements OnInit {
  courseList: any;
  placeList: any;

  @Input() modalRef: BsModalRef;

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    id_course: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    id_place: new FormControl(null, Validators.required),
    constancy: new FormControl(null, Validators.required)
  });

  constructor(
    private servParti: ParticipantsService
  ) { }

  ngOnInit() {
    this.servParti.getcourse().subscribe(response => {
      this.courseList = this.parseData(response.data);
    });
    this.servParti.getplace().subscribe(response => {
      this.placeList = this.parseData(response.data);
    });
  }

  closeModal() {
    this.modalRef.hide();
  }

  saveParti() {
    if (this.form.invalid) { return; }
    const data =this.form.getRawValue();
    if(data.date){
     data.date=moment(data.date).format('yyyy-mm-dd');
    }

    this.servParti.addUser(this.form.getRawValue()).subscribe(response => {
      if (response.status === true) {
        Swal.fire('Cool!', 'User added successfully', 'success');
        this.form.reset();
        this.closeModal();
      } else {
        Swal.fire('Oops..', response.message, 'error');
      }
    });
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
