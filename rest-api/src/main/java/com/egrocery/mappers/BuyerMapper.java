package com.egrocery.mappers;

import com.egrocery.entities.Buyer;
import com.egrocery.models.BuyerVo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BuyerMapper {
    @Mappings({
            @Mapping(target="id", expression="java(buyer.getProfileId())"),
            @Mapping(target="fullName", expression="java(buyer.getFirstName() + ' ' + buyer.getLastName())"),
            @Mapping(target="homeLocationGeom", expression="java(buyer.getHomeLocationGeom())"),
            @Mapping(target="cityName", expression="java(buyer.getCity().getName())"),
            @Mapping(target="accountEnabled", expression="java(buyer.isAccountEnabled())"),
    })
    BuyerVo mapTo(Buyer buyer);

    List<BuyerVo> mapTo(List<Buyer> buyers);
}
