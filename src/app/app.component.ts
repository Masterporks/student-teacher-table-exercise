import {Component, OnInit} from '@angular/core';
import {Teacher} from "./shared/models/teacher";
import {Student} from "./shared/models/student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'School-application';

  ngOnInit(): void {
    this.students = this.getStudents();
    this.teachers = this.getTeachers();

  }


  teachers: Teacher[] = [];
  tFirstNames: string[] = ['Jackie', 'Lisa', 'Trevor'];
  tLastNames: string[] = ['Looney', 'Fillor', 'Lambda'];
  tSpecialities: string[] = ['Literature', 'Economy', 'Psychology'];

  tAddresses: string[] = ['Narva', 'Viljandi', 'Finland'];
  tEmails: string[] = ['looney@gmail.com', 'this@mail.ee', 'random@gmail.com'];

  students: Student[] = [];
  sFirstNames: string[] = ['Millie', 'Laney', 'Tim'];
  sLastNames: string[] = ['Hulk', 'Rock', 'Toon'];
  sAges: number[] = [13, 16, 18];
  sAddresses: string[] = ['Narva', 'Viljandi', 'Finland'];
  sEmails: string[] = ['looy@gmail.com', 'is@mail.ee', 'rand@gmail.com'];

  getTeachers(): Teacher[] { //function return dog array
    let teachers: Teacher[] = [];
    teachers.push(new Teacher('Jack', 'Dobby', 'Science', 'Tallinn', 'dobby@gmail.com'));
    teachers.push(new Teacher('Julie', 'Shepperd', 'Chemistry', 'Tartu', 'shepperd@gmail.com'));

    return teachers;
  }

  getStudents(): Student[] { //function return dog array
    let students: Student[] = [];
    students.push(new Student('Jimmy', 'Doggie', 16, 'Tallinn', 'doggie@gmail.com'));
    students.push(new Student('Julie', 'Sheep', 17, 'Tartu', 'sheep@gmail.com'));

    return students;
  }

  addTeacher() {
    let tFirstName = this.tFirstNames.at(Math.random()*this.tFirstNames.length);
    let tLastName = this.tLastNames.at(Math.random()*this.tLastNames.length);
    let tSpeciality = this.tSpecialities.at(Math.random()*this.tSpecialities.length);
    let tAddress = this.tAddresses.at(Math.random()*this.tAddresses.length);
    let tEmail = this.tEmails.at(Math.random()*this.tEmails.length);

    // @ts-ignore
    this.teachers.push(new Teacher(tFirstName,tLastName,tSpeciality,tAddress, tEmail));

  }
  addStudent() {
    let sFirstName = this.sFirstNames.at(Math.random()*this.sFirstNames.length);
    let sLastName = this.sLastNames.at(Math.random()*this.sLastNames.length);
    let sAge = Math.floor(Math.random() *(+30 - +16)) + +16
    let sAddress = this.sAddresses.at(Math.random()*this.sAddresses.length);
    let sEmail = this.sEmails.at(Math.random()*this.sEmails.length);

    // @ts-ignore
    this.students.push(new Student(sFirstName,sLastName,sAge,sAddress, sEmail));
  }

}
