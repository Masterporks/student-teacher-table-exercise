import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../shared/models/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() studentTitle = "";
  @Input() students: Student[] = [];
  @Input() sFirstNames: string[] = ['Millie', 'Laney', 'Tim'];
  @Input() sLastNames: string[] = ['Hulk', 'Rock', 'Toon'];
  @Input() sAges: number[] = [13, 16, 18];
  @Input() sAddresses: string[] = ['Narva', 'Viljandi', 'Finland'];
  @Input() sEmails: string[] = ['looy@gmail.com', 'is@mail.ee', 'rand@gmail.com'];
  isShowFormTeacher: boolean = false;
  ngOnInit(): void {
    this.students = this.getStudents();
  }
  @Input() getStudents(): Student[] { //function return dog array
    let students: Student[] = [];
    students.push(new Student('Jimmy', 'Doggie', 16, 'Tallinn', 'doggie@gmail.com'));
    students.push(new Student('Julie', 'Sheep', 17, 'Tartu', 'sheep@gmail.com'));

    return students;
  }
  @Input() addStudent() {
    let sFirstName = this.sFirstNames.at(Math.random()*this.sFirstNames.length);
    let sLastName = this.sLastNames.at(Math.random()*this.sLastNames.length);
    let sAge = Math.floor(Math.random() *(+35 - +16)) + +16
    let sAddress = this.sAddresses.at(Math.random()*this.sAddresses.length);
    let sEmail = this.sEmails.at(Math.random()*this.sEmails.length);

    // @ts-ignore
    this.students.push(new Student(sFirstName,sLastName,sAge,sAddress, sEmail));
  }

}
