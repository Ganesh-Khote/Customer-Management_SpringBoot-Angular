package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.example.repository")
@EntityScan("com.example.entity") 
public class FirstCrudProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstCrudProjectApplication.class, args);
	}

}
