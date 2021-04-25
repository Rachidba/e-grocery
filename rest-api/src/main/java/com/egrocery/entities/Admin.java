package com.egrocery.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "admins")
@NoArgsConstructor
@Data
@EqualsAndHashCode
@SuperBuilder
public class Admin extends Profile {

}
