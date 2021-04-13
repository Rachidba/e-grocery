package com.egrocery.security.auth.ajax;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginRequest {
    private String phoneNumber;
    private String password;

    @JsonCreator
    public LoginRequest(@JsonProperty("phoneNumber") String phoneNumber, @JsonProperty("password") String password) {
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    public String getEmail() {
        return phoneNumber;
    }

    public String getPassword() {
        return password;
    }
}
