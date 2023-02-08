import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../shared/models/teacher";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  @Input() teacherTitle = "";
  @Input() teachers: Teacher[] = [];
  @Input() tFirstNames: string[] = ['Jackie', 'Lisa', 'Trevor'];
  @Input() tLastNames: string[] = ['Looney', 'Fillor', 'Lambda'];
  @Input() tSpecialities: string[] = ['Literature', 'Economy', 'Psychology'];
  @Input() tAddresses: string[] = ['Narva', 'Viljandi', 'Finland'];
  @Input() tEmails: string[] = ['looney@gmail.com', 'this@mail.ee', 'random@gmail.com'];

  ngOnInit(): void {
    this.teachers = this.getTeachers();
  }
  @Input() addTeacher() {
    let tFirstName = this.tFirstNames.at(Math.random()*this.tFirstNames.length);
    let tLastName = this.tLastNames.at(Math.random()*this.tLastNames.length);
    let tSpeciality = this.tSpecialities.at(Math.random()*this.tSpecialities.length);
    let tAddress = this.tAddresses.at(Math.random()*this.tAddresses.length);
    let tEmail = this.tEmails.at(Math.random()*this.tEmails.length);

    // @ts-ignore
    this.teachers.push(new Teacher(tFirstName,tLastName,tSpeciality,tAddress, tEmail));

  }
  @Input() getTeachers(): Teacher[] { //function return dog array
    let teachers: Teacher[] = [];
    teachers.push(new Teacher('Jack', 'Dobby', 'Science', 'Tallinn', 'dobby@gmail.com'));
    teachers.push(new Teacher('Julie', 'Shepperd', 'Chemistry', 'Tartu', 'shepperd@gmail.com'));

    return teachers;
  }
}
