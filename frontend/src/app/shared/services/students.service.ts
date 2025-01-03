import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private firestore: AngularFirestore) {}

  getStudents() {
    return this.firestore.collection<Student>('students').valueChanges({ idField: 'id' });
  }

  addStudent(student: Student) {
    return this.firestore.collection('students').add(student);
  }

  deleteStudent(id: string) {
    return this.firestore.doc(`students/${id}`).delete();
  }
}
