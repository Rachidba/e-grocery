package com.egrocery.services;

import com.egrocery.entities.Subcategory;
import com.egrocery.models.SubcategoryCreationVo;
import com.egrocery.repositories.CategoryRepository;
import com.egrocery.repositories.SubcategoryRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SubcategoryService {
    private final SubcategoryRepository subcategoryRepository;
    private final CategoryRepository categoryRepository;

    public SubcategoryService(SubcategoryRepository subcategoryRepository, CategoryRepository categoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
        this.categoryRepository = categoryRepository;
    }

    public Subcategory create(SubcategoryCreationVo subcategoryCreationVo) throws NotFoundException {
        var category = categoryRepository.findById(subcategoryCreationVo.getCategoryId());
        if (category.isEmpty())
            throw new NotFoundException(String.format("Cannot find category with id: %d", subcategoryCreationVo.getCategoryId()));

        var subcategory = Subcategory.builder()
                .id(subcategoryCreationVo.getId())
                .subcategoryName(subcategoryCreationVo.getSubcategoryName())
                .category(category.get())
                .build();
        return subcategoryRepository.save(subcategory);
    }
}
