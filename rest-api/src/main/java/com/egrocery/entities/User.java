package com.egrocery.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Data
@SuperBuilder
@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "user_id")
    protected Integer userId;

    @Column(unique = true)
    private String phoneNumber;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name = "is_enabled")
    private boolean isEnabled = false;

    public User(User user) {
        this.userId = user.userId;
        this.phoneNumber = user.phoneNumber;
        this.password = user.password;
        this.role = user.role;
        this.isEnabled = user.isEnabled;
    }
}
