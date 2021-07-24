import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MainComponent } from './_components/main/main.component';
import { ContentComponent } from './_components/content/content.component';
import { HeaderComponent } from './_components/header/header.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: 'users', loadChildren: () => import ('../users/users.module').then(m => m.UsersModule) },
      { path: 'course', loadChildren: () => import ('../course/course.module').then(m => m.CourseModule) }, 
      { path: 'place', loadChildren: () => import ('../place/place.module').then(m => m.PlaceModule) },
      { path: 'participants', loadChildren: () => import ('../participants/participants.module').then(m => m.ParticipantsModule) } 
    ]
  }
];

@NgModule({
  declarations: [MainComponent, ContentComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot()
  ]
})
export class SystemModule { }
