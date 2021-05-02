package com.egrocery.models;

import org.springframework.http.HttpStatus;

import java.util.Date;

public class ErrorResponse {
    private final HttpStatus status;
    private final String message;
    private final ErrorCode errorCode;
    private final Date timestamp;

    protected ErrorResponse(final String message, final HttpStatus status, final ErrorCode errorCode) {
        this.message = message;
        this.status = status;
        this.errorCode = errorCode;
        this.timestamp = new java.util.Date();
    }

    public static ErrorResponse of(final String message, final HttpStatus status, ErrorCode errorCode) {
        return new ErrorResponse(message, status, errorCode);
    }

    public static ErrorResponse of(final String message, final HttpStatus status) {
        return new ErrorResponse(message, status, ErrorCode.GLOBAL);
    }

    public String toString() {
        return new StringBuilder()
                .append("{Error message: " + message)
                .append(", HttpStatusCode: " + status)
                .append(", ErrorCode: " + errorCode + "}")
                .toString();
    }

    public HttpStatus getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }

    public Date getTimestamp() {
        return timestamp;
    }
}