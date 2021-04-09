package com.egrocery.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "shops")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "description", length = 500)
    private String description;
    @Column(name = "img_url")
    private String imgUrl;
    @Column(name = "location")
    private String location;
    @ManyToOne
    @JoinColumn(name="city_id", nullable=false)
    private City city;
}
