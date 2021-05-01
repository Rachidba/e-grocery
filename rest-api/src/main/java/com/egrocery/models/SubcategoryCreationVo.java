package com.egrocery.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SubcategoryCreationVo {
    private Long id;
    private String subcategoryName;
    private Long categoryId;
}
