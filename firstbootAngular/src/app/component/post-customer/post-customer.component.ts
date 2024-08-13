import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required)
  });


  constructor(private customerservice:CustomerService,private route:Router){}

  postcustomer(){
    this.customerservice.postcustomer(this.form.value).subscribe((res)=>{
      console.log(res);
      this.route.navigateByUrl('');
    })
  }

}
