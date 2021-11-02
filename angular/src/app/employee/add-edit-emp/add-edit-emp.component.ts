import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from 'src/app/shared.service';



@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(
    private service: SharedService
  ) { }


  @Input()emp:any;
  EmployeeId:string="";
  EmployeeName: string ="";
  Age :string ="";
  Designation :string ="";
  PhoneNumber :string ="";

  DepartmentsList:any=[];

  ngOnInit(): void {
  }



  addEmployee(){
    var val = {
      EmployeeName:this.EmployeeName,
      Age:this.Age,
      Designation:this.Designation,
      PhoneNumber:this.PhoneNumber
    };

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  loadDepartmentList(){
    this.service.getEmpList().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.Age=this.Age;
      this.Designation=this.Designation;
      this.PhoneNumber=this.PhoneNumber;
    });
  }


  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Age:this.Age,
      Designation:this.Designation,
      PhoneNumber:this.PhoneNumber
    };

    this.service.updateEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
