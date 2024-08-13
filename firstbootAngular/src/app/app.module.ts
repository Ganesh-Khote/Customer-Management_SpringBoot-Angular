import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCustomerComponent } from './component/post-customer/post-customer.component';
import { GetAllCustomersComponent } from './component/get-all-customers/get-all-customers.component';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCustomerComponent,
    GetAllCustomersComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
