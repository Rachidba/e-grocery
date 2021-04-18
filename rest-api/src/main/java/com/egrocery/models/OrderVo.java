package com.egrocery.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class OrderVo {
    private Set<OrderItemVo> orderItems;
    private double totalPrice;
}
