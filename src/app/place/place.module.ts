import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './_components/list/list.component';
import { ModalAddplaceComponent } from './_components/modal-addplace/modal-addplace.component';

const routes: Routes = [
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [ListComponent, ModalAddplaceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class PlaceModule { }
