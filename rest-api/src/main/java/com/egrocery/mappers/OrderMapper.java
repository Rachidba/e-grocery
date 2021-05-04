package com.egrocery.mappers;

import com.egrocery.entities.Order;
import com.egrocery.entities.OrderItem;
import com.egrocery.models.OrderItemVo;
import com.egrocery.models.OrderVo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    @Mappings({
            @Mapping(target="productId", expression="java(orderItem.getProduct().getId())"),
            @Mapping(target="productTitle", expression="java(orderItem.getProduct().getTitle())"),
            @Mapping(target="productImgUrl", expression="java(orderItem.getProduct().getImgUrl())"),
    })
    public OrderItemVo toOrderItemVo(OrderItem orderItem);

    @Mappings({
            @Mapping(target="buyerId", expression="java(order.getBuyer().getProfileId())"),
            @Mapping(target="sellerId", expression="java(order.getSeller().getProfileId())"),
            @Mapping(target="shopId", expression="java(order.getSeller().getShop().getId())"),
            @Mapping(target="shopLocation", expression="java(order.getSeller().getShop().getGeom())"),
            @Mapping(target="city", expression="java(order.getSeller().getShop().getCity().getName())"),
            @Mapping(target="createdDate", expression="java(order.getCreatedDate())"),
    })
    public OrderVo toOrderVo(Order order);

    public List<OrderVo> toOrderVo(List<Order> orderVo);
}
