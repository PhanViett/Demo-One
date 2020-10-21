import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-epl-create',
  templateUrl: './epl-create.component.html',
  styleUrls: ['./epl-create.component.css']
})
export class EplCreateComponent implements OnInit {

  employee : Employee = new Employee ();
  submitted = false;

  constructor(private employeeService : EmployeeService,
              private router: Router) { }

  ngOnInit() {
  }

  newEmployee() : void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
