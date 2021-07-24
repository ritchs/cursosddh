import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import * as moment from 'moment';

import { UsersService } from '../../_services/users.service';
@Component({
  selector: 'app-users-modal-adduser',
  templateUrl: './modal-adduser.component.html',
  styleUrls: ['./modal-adduser.component.css']
})
export class ModalAdduserComponent implements OnInit {
  courseList: any;
  placeList: any;

  @Input() modalRef: BsModalRef;

  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(
    private servUsers: UsersService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalRef.hide();
  }

  saveUser() {
    if (this.form.invalid) { return; }
    const data =this.form.getRawValue();
    if(data.date){
     data.date=moment(data.date).format('yyyy-mm-dd');
    }

    this.servUsers.addUser(this.form.getRawValue()).subscribe(response => {
      if (response.status === true) {
        Swal.fire('Cool!', 'User added successfully', 'success');
        this.form.reset();
        this.closeModal();
      } else {
        Swal.fire('Oops..', response.message, 'error');
      }
    });
  }
}
