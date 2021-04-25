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
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "user_id")
    protected Integer userId;
    @Column(name = "phone_number", unique = true)
    private String phoneNumber;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Profile profile;
    @Column(name = "enabled")
    private boolean enabled = false;

    public User(User user) {
        this.userId = user.userId;
        this.phoneNumber = user.phoneNumber;
        this.password = user.password;
        this.role = user.role;
        this.enabled = user.enabled;
    }
}
