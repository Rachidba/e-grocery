package com.egrocery.exceptions;

public class CityNotFoundException extends RuntimeException {
    private String message;

    public CityNotFoundException(String message) {
        this.message = message;
    }
}
