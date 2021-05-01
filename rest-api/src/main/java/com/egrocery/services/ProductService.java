package com.egrocery.services;

import com.egrocery.entities.Product;
import com.egrocery.repositories.ProductRepository;
import com.egrocery.repositories.SubcategoryRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final SubcategoryRepository subcategoryRepository;

    public ProductService(ProductRepository productRepository, SubcategoryRepository subcategoryRepository) {
        this.productRepository = productRepository;
        this.subcategoryRepository = subcategoryRepository;
    }

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public List<Product> getBySubcategory(Long subcategoryId) throws NotFoundException {
        var subcategory = subcategoryRepository.findById(subcategoryId);
        if (subcategory.isEmpty())
            throw new NotFoundException(String.format("Cannot find subcategory with id: %d", subcategoryId));
        return productRepository.findBySubcategory(subcategory.get());
    }
}
