package com.egrocery.models;

import com.egrocery.tools.JsonToPointDeserializer;
import com.egrocery.tools.PointToJsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.Instant;
import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class OrderVo {
    private Long id;
    private Set<OrderItemVo> orderItems;
    private double totalPrice;
    private Long buyerId;
    private Long sellerId;
    private String sellerFullName;
    private Long shopId;
    private String shopName;
    private String city;
    @JsonSerialize(using = PointToJsonSerializer.class)
    @JsonDeserialize(using = JsonToPointDeserializer.class)
    private com.vividsolutions.jts.geom.Point shopLocation;
    @JsonSerialize(using = PointToJsonSerializer.class)
    @JsonDeserialize(using = JsonToPointDeserializer.class)
    private com.vividsolutions.jts.geom.Point deliveryLocationGeom;
    private Date createdDate;
}
