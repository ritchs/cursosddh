import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './_components/list/list.component';
import { ModalAddcourseComponent } from './_components/modal-addcourse/modal-addcourse.component';

const routes: Routes = [
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [ListComponent, ModalAddcourseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class CourseModule { }
