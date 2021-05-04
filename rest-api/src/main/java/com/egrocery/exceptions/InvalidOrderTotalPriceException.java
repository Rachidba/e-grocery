package com.egrocery.exceptions;

public class InvalidOrderTotalPriceException extends RuntimeException {
    private String message;

    public InvalidOrderTotalPriceException(String message) {
        this.message = message;
    }
}
