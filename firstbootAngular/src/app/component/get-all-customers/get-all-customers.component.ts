import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
  customer:any =[];
  constructor(private serive:CustomerService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
this.getAllcustomers();
  }

  getAllcustomers(){
    this.serive.getAllcustomer().subscribe((res)=>{
      console.log(res);
      this.customer=res;
    })
  }

  deletecustomer(id:number){
    this.serive.deletecustomer(id).subscribe((res)=>{
      console.log(res);
      this.getAllcustomers();
    })

  }



}
