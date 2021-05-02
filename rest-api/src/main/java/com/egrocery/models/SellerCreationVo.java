package com.egrocery.models;

import com.egrocery.tools.JsonToPointDeserializer;
import com.egrocery.tools.PointToJsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SellerCreationVo {
    @NotEmpty
    private String phoneNumber;
    @NotEmpty
    private String password;
    @NotEmpty
    private String firstName;
    private String lastName;
    @NotEmpty
    private String shopName;
    private String description;
    private boolean accountEnabled;
    @NotNull
    private long cityId;
    @JsonSerialize(using = PointToJsonSerializer.class)
    @JsonDeserialize(using = JsonToPointDeserializer.class)
    @NotEmpty
    public com.vividsolutions.jts.geom.Point geom;
}
