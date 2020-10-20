import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-epl-update',
  templateUrl: './epl-update.component.html',
  styleUrls: ['./epl-update.component.css']
})
export class EplUpdateComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,
              private employeeService : EmployeeService,
              private router : Router) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
    .subscribe (data => {
      console.log(data)
      this.employee = data;
    }, error => console.log(error));
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
