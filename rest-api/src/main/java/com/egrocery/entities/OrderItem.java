package com.egrocery.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="order_items")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @ManyToOne
    @JoinColumn(name="product_id", nullable=false)
    @Getter
    @Setter
    private Product product;

    @Column(name = "quantity")
    @Getter
    @Setter
    private int quantity;

    @ManyToOne
    @JoinColumn(name="order_id", nullable=false)
    private Order order;

    public Long getOrderId() {
        return order.getId();
    }
}
