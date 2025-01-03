import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Student } from '../../model/student';



@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private db: AngularFireDatabase) {}

  getStudents(){
    return this.db.list('students')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }


  addStudent(student: Student){
    this.db.list('students').push(student)
    .then((result: any) => {
      console.log(result.key);
  });

  }

  deleteStudent(key: string){
    this.db.object(`students/${key}`).remove()
  }

  updateStudent(student: Student, key: string){
    this.db.list('students').update(key, student)
    .catch((error: any) => {
      console.error(error);
    });
  }
}
