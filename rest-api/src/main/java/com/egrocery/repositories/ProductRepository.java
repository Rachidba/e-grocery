package com.egrocery.repositories;

import com.egrocery.entities.Product;
import com.egrocery.entities.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    public List<Product> findBySubcategory(Subcategory subcategory);
}
