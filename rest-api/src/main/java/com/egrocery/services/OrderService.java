package com.egrocery.services;

import com.egrocery.entities.Order;
import com.egrocery.entities.OrderItem;
import com.egrocery.exceptions.ProductNotFoundException;
import com.egrocery.models.OrderVo;
import com.egrocery.repositories.OrderItemRepository;
import com.egrocery.repositories.OrderRepository;
import com.egrocery.repositories.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
public class OrderService {
    private OrderRepository orderRepository;
    private OrderItemRepository orderItemRepository;
    private ProductRepository productRepository;

    public OrderService(OrderRepository orderRepository, OrderItemRepository orderItemRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.productRepository = productRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    //@Transat
    public void createOrder(OrderVo orderVo) throws ProductNotFoundException, IllegalArgumentException {
        var orderItems = new HashSet<OrderItem>();
        var totalPrice = 0.0;

        var order = orderRepository.save(Order.builder().totalPrice(orderVo.getTotalPrice()).build());
        for (var orderItem: orderVo.getOrderItems()
             ) {
            var maybeProduct = productRepository.findById(orderItem.getProductId());
            if (maybeProduct.isEmpty()) throw new ProductNotFoundException("Product with id " + orderItem.getProductId() + " not found");
            orderItems.add(OrderItem.builder().product(maybeProduct.get()).quantity(orderItem.getProductQuantity()).order(order).build());
            totalPrice += maybeProduct.get().getPrice() * orderItem.getProductQuantity();
        }
        if (totalPrice != orderVo.getTotalPrice()) throw new IllegalArgumentException();
        orderItemRepository.saveAll(orderItems);
    }
}
