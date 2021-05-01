package com.egrocery.controllers;

import com.egrocery.entities.Product;
import com.egrocery.repositories.ProductRepository;
import com.egrocery.services.ProductService;
import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAll() {
        var products = productService.getAll();
        var httpStatus = products.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).body(products);
    }

    @GetMapping("/bysubcategory/{subcategoryId}")
    public ResponseEntity<List<Product>> getBySubcategory(@PathVariable Long subcategoryId) throws NotFoundException {
        var products = productService.getBySubcategory(subcategoryId);
        var httpStatus = products.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).body(products);
    }
}
