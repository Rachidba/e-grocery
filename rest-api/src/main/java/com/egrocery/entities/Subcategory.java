package com.egrocery.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "subcategories")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Subcategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "subcategoryName", nullable = false, unique = true)
    private String subcategoryName;

    @ManyToOne
    @JoinColumn(name="category_id", nullable=false)
    private Category category;
}
