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
  }


  teachers: Teacher[] = [];
  students: Student[] = [];
studentTitle = 'List of students';
teacherTitle = 'List of teachers';







}
