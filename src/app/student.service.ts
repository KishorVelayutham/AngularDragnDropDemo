import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
students: Student[] = [
    {
        name: 'Kishor'
    },
    {
        name: 'Yashwanth'
    },
    {
        name: 'Kiran'
    },
    {
        name: 'Praneeth'
    },
    {
        name: 'Atanu'
    }]
  constructor() { }
  public getStudents(): any {
     const studentsObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.students);
            }, 1000);
     });

     return studentsObservable;
 }
}
