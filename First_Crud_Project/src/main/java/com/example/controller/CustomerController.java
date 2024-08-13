package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Customer;
import com.example.service.CustomerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerController {
    @Autowired
    private final CustomerService customerService;

    @PostMapping("/customer")
    public Customer postCustomer(@RequestBody Customer customer){
        return customerService.postcustomer(customer);
    }

       @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<Customer> getcustomerbyid(@PathVariable Long id){
        Customer customer= customerService.getcustomerbyid(id);
        if(customer==null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(customer);
    }

    @DeleteMapping("/customer/{id}")
    public void deletecustomer(@PathVariable Long id){
        customerService.deletecustomer(id);
    }

    @PutMapping("/customer/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id,@RequestBody Customer customer){
Customer updatedCustomer=customerService.updatecustomer(id, customer);
if(updatedCustomer==null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
return ResponseEntity.ok(updatedCustomer);
    }

}
