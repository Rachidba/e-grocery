package com.egrocery.exceptions;

import lombok.Data;

@Data
public class PhoneNumberAlreadyExistsException extends RuntimeException {
    private String message;
    public PhoneNumberAlreadyExistsException(String message) {
        this.message = message;
    }
}
