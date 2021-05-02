package com.egrocery.models;

import com.egrocery.tools.JsonToPointDeserializer;
import com.egrocery.tools.PointToJsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SellerVo {
    private Long id;
    private String shopName;
    private String fullName;
    private String phoneNumber;
    private String cityName;
    @JsonSerialize(using = PointToJsonSerializer.class)
    @JsonDeserialize(using = JsonToPointDeserializer.class)
    private com.vividsolutions.jts.geom.Point shopLocation;
}
