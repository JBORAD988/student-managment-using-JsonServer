import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../../students.service";
import { ColDef, GridApi ,GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit{
  private griApi!:GridApi<any>;

  StudentList :any = [] ;

  public rowSelection: 'single'|'multiple' = 'multiple';

  editableq : boolean = true;

  colDefs: ColDef[] = [
    {field:'id', headerName:'Student ID',checkboxSelection:true , headerCheckboxSelection:true , cellRenderer:(item:any)=>{
        return "ID -"+item.value
      }},
    { field: "name" , headerName: 'Name' , filter:true},
    { field: "email", headerName: 'E-Mail', editable: false },
  ];

  defaultColDef={
    flex:1,
    minWidth:100
  }


  constructor(private student:StudentsService) {
  }

  ngOnInit() {
    this.student.getAllStudent().subscribe(e=>{
      this.StudentList = e
    })

  }

  // Download as CSV Excel File
  onBtnExport(){
    debugger
    this.griApi.exportDataAsCsv();

  }

  // Download as CSV Excel File
  onGridReady(event: GridReadyEvent<any>){
    this.griApi = event.api;
  }

}
