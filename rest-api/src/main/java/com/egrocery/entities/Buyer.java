package com.egrocery.entities;

import com.egrocery.tools.JsonToPointDeserializer;
import com.egrocery.tools.PointToJsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "buyers")
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@SuperBuilder
public class Buyer extends Profile {
    @JsonSerialize(using = PointToJsonSerializer.class)
    @JsonDeserialize(using = JsonToPointDeserializer.class)
    @Column(name= "home_location_geom", columnDefinition="Geometry")
    public com.vividsolutions.jts.geom.Point homeLocationGeom;
    @ManyToOne
    @JoinColumn(name="city_id", nullable=false)
    private City city;
    public Long getProfileId() {
        return profileId;
    }
}
