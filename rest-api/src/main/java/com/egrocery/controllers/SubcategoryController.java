package com.egrocery.controllers;

import com.egrocery.entities.Subcategory;
import com.egrocery.models.SubcategoryCreationVo;
import com.egrocery.services.SubcategoryService;
import javassist.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/subcategories")
public class SubcategoryController {
    private final SubcategoryService subcategoryService;

    public SubcategoryController(SubcategoryService subcategoryService) {
        this.subcategoryService = subcategoryService;
    }

    @PostMapping
    public ResponseEntity<Subcategory> create(@RequestBody SubcategoryCreationVo subcategoryCreationVo) throws NotFoundException {
        var subcategory = subcategoryService.create(subcategoryCreationVo);
        return ResponseEntity.ok(subcategory);
    }
}
