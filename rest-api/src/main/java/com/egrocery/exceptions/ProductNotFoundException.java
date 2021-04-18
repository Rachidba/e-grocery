package com.egrocery.exceptions;

public class ProductNotFoundException extends RuntimeException {
    private String message;

    public ProductNotFoundException(String message) {
        this.message = message;
    }
}
