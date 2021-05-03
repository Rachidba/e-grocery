package com.egrocery.mappers;

import com.egrocery.entities.Seller;
import com.egrocery.models.SellerVo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SellerMapper {
    @Mappings({
            @Mapping(target="id", expression="java(seller.getProfileId())"),
            @Mapping(target="fullName", expression="java(seller.getFirstName() + ' ' + seller.getLastName())"),
            @Mapping(target="shopName", expression="java(seller.getShop().getName())"),
            @Mapping(target="shopLocation", expression="java(seller.getShop().getGeom())"),
            @Mapping(target="cityName", expression="java(seller.getShop().getCity().getName())"),
            @Mapping(target="accountEnabled", expression="java(seller.isAccountEnabled())"),
    })
    SellerVo mapTo(Seller seller);

    List<SellerVo> mapTo(List<Seller> sellers);
}
