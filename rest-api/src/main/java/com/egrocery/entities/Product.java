package com.egrocery.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "description", length = 500)
    private String description;
    @Column(name = "price")
    private double price;
    @Column(name = "unit_of_measure")
    private String unitOfMeasure;
    @Column(name = "img_url")
    private String imhUrl;
    @ManyToOne
    @JoinColumn(name="subcategory_id", nullable=false)
    private Subcategory subcategory;

}
