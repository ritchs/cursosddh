import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


import { PlaceService } from '../../_services/place.service';

@Component({
  selector: 'app-place-modal-addplace',
  templateUrl: './modal-addplace.component.html',
  styleUrls: ['./modal-addplace.component.css']
})
export class ModalAddplaceComponent implements OnInit {

  @Input() modalRef: BsModalRef;

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
  });

  constructor(
    private servPlace: PlaceService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalRef.hide();
  }

  saveUser() {
    if (this.form.invalid) { return; }

    this.servPlace.addPlace(this.form.getRawValue()).subscribe(response => {
      if (response.status === true) {
        Swal.fire('Cool!', 'Place added successfully', 'success');
        this.form.reset();
        this.closeModal();
      } else {
        Swal.fire('Oops..', response.message, 'error');
      }
    });
  }

}
