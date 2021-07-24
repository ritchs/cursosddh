import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { ListComponent } from './_components/list/list.component';
import { ModalAddpartiComponent } from './_components/modal-addparti/modal-addparti.component';

const routes: Routes = [
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [ListComponent, ModalAddpartiComponent],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ParticipantsModule { }
