import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private BASICURL = "http://localhost:8080"; // Change this to a string

  constructor(private http: HttpClient) { }

  postcustomer(customer: any): Observable<any> {
    return this.http.post(this.BASICURL + "/api/customer", customer); // Properly concatenate the URL
  }

  getAllcustomer():Observable<any>{
    return this.http.get(this.BASICURL+"/api/customers");
  }

  deletecustomer(id:number):Observable<any>{
    return this.http.delete(this.BASICURL+"/api/customer/"+id);
  }
  getidbycustomer(id:number):Observable<any>{
    return this.http.get(this.BASICURL+"/api/customer/"+id);
  }

  updateidbycustomer(id:number,customer:any):Observable<any>{
    return this.http.put(this.BASICURL+"/api/customer/"+id,customer);
  }
}
