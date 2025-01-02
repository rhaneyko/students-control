import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student';


@Injectable({
  providedIn: 'root',
})

export class StudentService {
  private collectionName = 'students';


  constructor(private firestore: AngularFirestore) {}

  getStudents(): Observable<Student[]> {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }

  addStudent(student: any): Promise<any> {
    return this.firestore.collection(this.collectionName).add(student);
  }

  deleteStudent(studentId: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(studentId).delete();
  }

  updateStudent(student: any): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(student.id).update(student);
  }


}
