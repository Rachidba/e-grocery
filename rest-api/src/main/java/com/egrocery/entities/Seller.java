package com.egrocery.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "sellers")
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@SuperBuilder
public class Seller extends User {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "shop_id", referencedColumnName = "id")
    private Shop shop;

    public Integer getUserid() {
        return getUserid();
    }
}
