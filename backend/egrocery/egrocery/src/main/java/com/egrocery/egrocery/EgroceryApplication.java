package com.egrocery.egrocery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class EgroceryApplication {

	public static void main(String[] args) {
		SpringApplication.run(EgroceryApplication.class, args);
	}

}
