package com.egrocery.entities;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Setter
@SuperBuilder
@Table(name = "profiles")
@EqualsAndHashCode
@Inheritance(strategy= InheritanceType.TABLE_PER_CLASS)
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "profile_id")
    protected Long profileId;
    @Column(name = "first_name")
    protected String firstName;
    @Column(name = "last_name")
    protected String lastName;
    @Column(name = "is_profile_completed")
    protected boolean isProfileCompleted = false;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    protected User user;

    public Profile(User user) {
        this.user = user;
    }
    public Long getProfileId() {
        return this.profileId;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public boolean isProfileCompleted() {
        return isProfileCompleted;
    }
    public String getPhoneNumber() {
        return user.getPhoneNumber();
    }
}
