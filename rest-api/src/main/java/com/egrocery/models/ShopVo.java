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
public class ShopVo {
    private Long id;
    private String name;
    private String description;
    private String imgUrl;
    private double distance;
    @JsonSerialize(using = PointToJsonSerializer.class)
    @JsonDeserialize(using = JsonToPointDeserializer.class)
    public com.vividsolutions.jts.geom.Point geom;
}
