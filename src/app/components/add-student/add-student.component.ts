import {Component, OnInit} from '@angular/core';
import {FormGroup , FormControl } from "@angular/forms";
import {StudentsService} from "../../students.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit{

  constructor(private api:StudentsService, private route: Router) {
  }

  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  ngOnInit() {

  }
SaveData(){
  this.api.saveData(this.addStudent.value).subscribe(res=>{
    console.log(res)
    this.route.navigate(['list'])
  });
}


}
