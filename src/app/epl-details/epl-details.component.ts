import { EmployeeService } from './../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-epl-details',
  templateUrl: './epl-details.component.html',
  styleUrls: ['./epl-details.component.css']
})
export class EplDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

    constructor(private route: ActivatedRoute,
                private employeeService : EmployeeService,
                private router : Router) { }


  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
    }

    list(){
      this.router.navigate(['employees'])
    }

}
