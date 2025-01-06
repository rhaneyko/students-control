import { Component } from '@angular/core';
import { StudentService } from '../../shared/services/students.service';
import { Student } from '../../model/student'; // Importe do arquivo correto

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  students: any[] = [];
  newStudent = { name: '', email: '', course: ''};

  constructor(private studentService: StudentService) {}

  addStudent() {
    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.students.push(this.newStudent);
      this.newStudent = { name: '', email: '', course: '' };
    });
  }


}
