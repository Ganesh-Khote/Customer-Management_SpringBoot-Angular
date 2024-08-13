import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
  id:number=this.activate.snapshot.params['id'];
  constructor(private activate:ActivatedRoute,private service:CustomerService,private route:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getcustomerbyid();
  }
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required)
  });
  getcustomerbyid(){
    this.service.getidbycustomer(this.id).subscribe((res)=>{
      console.log(res);
      this.form.patchValue(res);
    })
  }

  updatebyid(){
    this.service.updateidbycustomer(this.id,this.form.value).subscribe((res)=>{
      console.log(res);
      this.route.navigateByUrl('');
    })
  }






}
