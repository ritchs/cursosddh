import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ExcelService} from '../../_services/excel/excel.service';
import { ParticipantsService } from '../../_services/participants.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usersList: any;
  term: any;
  filterData: any;
  resultado: any;

  @ViewChild('templateModalParti', null) tmpModalParti: TemplateRef<any>;
  modalRef: BsModalRef;
 
  form = new FormGroup({
    term: new FormControl(null),
  });

  constructor(
    private servParti: ParticipantsService,
    private excelService: ExcelService,
    private modal: BsModalService
  ) { }

  ngOnInit() {
    this.servParti.getUsers().subscribe(response => {
      this.usersList = this.parseData(response.data);
    });
    this.servParti.getUsers().subscribe(response => {
      this.filterData = this.parseData(response.data);
    });  
  }

  showPartiModal() {
    const modalOptions: ModalOptions = {
      ignoreBackdropClick: true,
      keyboard: true
    };

    this.modalRef = this.modal.show(this.tmpModalParti, modalOptions);
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
  

  exportAsXLSX():void {
    
    const result = this.filterData.filter(word => word.nombre == this.term);
  
  console.log(result);
     this.excelService.exportAsExcelFile(result, 'sample');
    }
  }
