package com.egrocery.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class OrderItemVo {
    private Long id;
    private Long productId;
    private String productTitle;
    private String productImgUrl;
    private String productPrice;
    private int quantity;
}
