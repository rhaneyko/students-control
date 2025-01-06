import { Component, OnInit } from '@angular/core';


import { StudentService } from '../../shared/services/students.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']

})
export class StudentsComponent implements OnInit {

  students: any[] = [];
  newStudent = { name: '', email: '', course: ''};

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }
}
