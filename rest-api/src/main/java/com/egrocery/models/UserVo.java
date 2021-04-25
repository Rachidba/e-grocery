package com.egrocery.models;

import com.egrocery.entities.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserVo {
    @NotEmpty(message = "Phone number is mandatory for account creation")
    private String phoneNumber;
    @NotEmpty(message = "Password is mandatory for account creation")
    private String password;
    @NotNull(message = "Role is mandatory for account creation")
    private Role role;
    private boolean accountEnabled = false;
}
