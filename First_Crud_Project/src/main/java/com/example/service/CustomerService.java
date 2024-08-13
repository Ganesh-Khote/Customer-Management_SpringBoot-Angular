package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.entity.Customer;
import com.example.repository.CustomerRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    public Customer postcustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    public void deletecustomer(Long id){
        customerRepository.deleteById(id);
    }

    public Customer getcustomerbyid(Long id){
        return customerRepository.findById(id).orElse(null);
    }

    public Customer updatecustomer(Long id,Customer customer){
        Optional<Customer> optionalCustomer=customerRepository.findById(id);
        if(optionalCustomer.isPresent()){
            Customer exstingCustomer=optionalCustomer.get();
            exstingCustomer.setEmail(customer.getEmail());
            exstingCustomer.setName(customer.getName());
            exstingCustomer.setPhone(customer.getPhone());
            return customerRepository.save(exstingCustomer);
        }
        return null;
    }

}
