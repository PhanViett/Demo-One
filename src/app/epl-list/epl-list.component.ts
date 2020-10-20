import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epl-list',
  templateUrl: './epl-list.component.html',
  styleUrls: ['./epl-list.component.css']
})
export class EplListComponent implements OnInit {
  
  employees : Observable<Employee[]>;

  constructor(private employeeService : EmployeeService,
              private router : Router) { }

  ngOnInit() {
    this.reloadData();
  }

  //
  // Reload data bằng cách gán giá trị mảng của employees thông 
  // qua function getEmployeesList() trong EmployeeService.
  reloadData(){
    //this.employees = this.employeeService.getEmployeesList();
  }
  
  //
  // Quy trình tính năng xóa dữ liệu được thiết lập ở EmployeeService
  // và user được xác định thông qua id
  deleteEmployee (id : number) {
    this.employeeService.deleteEmployee(id)

  // .subcribe ở đây được sử dụng để reload lại data có trong hệ thống   
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error())
      )       
  }

  employeeDetails( id : number ){
    this.router.navigate(['detail', id]);
  }
}
