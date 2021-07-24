import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './login/_services/login.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule), canActivate: [LoginService] },
  { path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule), canActivate: [LoginService] },
  { path: 'place', loadChildren: () => import('./place/place.module').then(m => m.PlaceModule), canActivate: [LoginService] },
  { path: 'participants', loadChildren: () => import('./participants/participants.module').then(m => m.ParticipantsModule), canActivate: [LoginService] },
  { path: 'error', loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule) },
  { path: '**', pathMatch: 'full', loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
