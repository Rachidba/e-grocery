package com.egrocery.entities;

import com.egrocery.tools.JsonToPointDeserializer;
import com.egrocery.tools.PointToJsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="orders")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "order")
    private Set<OrderItem> orderItems;

    @Column(name = "total_price")
    private double totalPrice;

    @ManyToOne
    @JoinColumn(name="buyer_id", nullable=false)
    private Buyer buyer;

    @ManyToOne
    @JoinColumn(name="seller_id", nullable=false)
    private Seller seller;

    @JsonSerialize(using = PointToJsonSerializer.class)
    @JsonDeserialize(using = JsonToPointDeserializer.class)
    @Column(name = "delivery_location_geom", columnDefinition="Geometry")
    public com.vividsolutions.jts.geom.Point deliveryLocationGeom;

    @Column(name = "created_date", nullable = false, updatable = false)
    @CreatedDate
    private Date createdDate;
}
