import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/services/students.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  addStudent() {
    const newStudent: Student = {
      name: 'Rhaneyko Honorio',
      email: 'rhaneyko.honorio@estudante.edu',
      course: 'Análise e Desenvolvimento de Sistemas'
    };
    this.studentService.addStudent(newStudent);
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id);
  }
}
