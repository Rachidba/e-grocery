package com.egrocery.exceptions;

import com.egrocery.models.ErrorResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ExceptionsInterceptor {
    Logger logger = LoggerFactory.getLogger(ExceptionsInterceptor.class);

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<String> handleNotFoundException(NotFoundException exception) {
        var errorResponse = ErrorResponse.of(exception.getMessage(), HttpStatus.NOT_FOUND);
        logger.error("Exception: " + exception + ", ErrorResponse: " + errorResponse);
        return new ResponseEntity(errorResponse.getMessage(), errorResponse.getStatus());
    }

    @ExceptionHandler(PhoneNumberAlreadyExistsException.class)
    public ResponseEntity<String> handleEmailAlreadyExistsException(PhoneNumberAlreadyExistsException exception) {
        var errorResponse = ErrorResponse.of(exception.getMessage(), HttpStatus.CONFLICT);
        logger.error("Exception: " + exception + ", ErrorResponse: " + errorResponse);
        return new ResponseEntity(errorResponse.getMessage(), errorResponse.getStatus());
    }

    @ExceptionHandler(InvalidOrderTotalPriceException.class)
    public ResponseEntity<String> handleInvalidOrderTotalPriceException(InvalidOrderTotalPriceException exception) {
        var errorResponse = ErrorResponse.of(exception.getMessage(), HttpStatus.CONFLICT);
        logger.error("Exception: " + exception + ", ErrorResponse: " + errorResponse);
        return new ResponseEntity(errorResponse.getMessage(), errorResponse.getStatus());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationException(MethodArgumentNotValidException exception) {
        var errors = new HashMap<String, String>();
        exception.getBindingResult().getAllErrors().forEach((error) -> {
            var fieldName = ((FieldError) error).getField();
            var errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        var errorResponse = ErrorResponse.of(exception.getMessage(), HttpStatus.BAD_REQUEST);
        logger.error("Exception: " + exception + ", ErrorResponse: " + errorResponse);
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}
