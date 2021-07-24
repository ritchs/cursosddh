import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { PlaceService } from '../../_services/place.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  placeList: any;

  @ViewChild('templateModalPlace', null) tmpModalplace: TemplateRef<any>;
  modalRef: BsModalRef;

  constructor(
    private servPlace: PlaceService,
    private modal: BsModalService
  ) { }

  ngOnInit() {
    this.servPlace.getPlace().subscribe(response => {
      this.placeList = this.parseData(response.data);
    });
  }

  showPlaceModal() {
    const modalOptions: ModalOptions = {
      ignoreBackdropClick: true,
      keyboard: true
    };

    this.modalRef = this.modal.show(this.tmpModalplace, modalOptions);
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
