import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { StudentsComponent } from './features/students/students.component';
import { AddStudentComponent } from './features/add-student/add-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'add-student', component: AddStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
