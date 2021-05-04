package com.egrocery.services;

import com.egrocery.entities.Order;
import com.egrocery.entities.OrderItem;
import com.egrocery.exceptions.InvalidOrderTotalPriceException;
import com.egrocery.exceptions.NotFoundException;
import com.egrocery.mappers.OrderMapper;
import com.egrocery.models.OrderCreationVo;
import com.egrocery.models.OrderItemCreationVo;
import com.egrocery.models.OrderVo;
import com.egrocery.repositories.OrderItemRepository;
import com.egrocery.repositories.OrderRepository;
import com.egrocery.repositories.ProductRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final ProductRepository productRepository;
    private final BuyerService buyerService;
    private final SellerService sellerService;
    private final OrderMapper orderMapper;

    public OrderService(OrderRepository orderRepository, OrderItemRepository orderItemRepository, ProductRepository productRepository, BuyerService buyerService, SellerService sellerService, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.productRepository = productRepository;
        this.buyerService = buyerService;
        this.sellerService = sellerService;
        this.orderMapper = orderMapper;
    }

    public List<OrderVo> getAllOrders() {
        var orders = orderRepository.findAll();
        return orderMapper.toOrderVo(orders);
    }

    @Transactional
    public OrderVo createOrder(OrderCreationVo orderVo) throws NotFoundException, IllegalArgumentException {
        var buyer = buyerService.getById(orderVo.getBuyerId());
        var seller = sellerService.getById(orderVo.getSellerId());
        var order = Order.builder()
                .buyer(buyer)
                .seller(seller)
                .totalPrice(orderVo.getTotalPrice())
                .deliveryLocationGeom(orderVo.getDeliveryLocationGeom())
                .build();

        var savedOrder = orderRepository.save(order);
        var orderItems = toOrderItems(orderVo.getOrderItems(), savedOrder);
        var calculatedTotalPrice = calculateTotalPrice(orderItems);
        if (orderVo.getTotalPrice() != calculatedTotalPrice)
            throw new InvalidOrderTotalPriceException(String.format("The sent order totalPrice (%f) is different than the calculated order totalPrice (%f)", orderVo.getTotalPrice(), calculatedTotalPrice));

        var savedOrderItems = orderItemRepository.saveAll(orderItems);
        savedOrder.setOrderItems(new HashSet<>(savedOrderItems));
        return orderMapper.toOrderVo(savedOrder);
    }

    private List<OrderItem> toOrderItems(Set<OrderItemCreationVo> orderItemVos, Order order) {
        var orderItems = new ArrayList<OrderItem>();
        for(var orderItemVo: orderItemVos) {
            var product = productRepository.findById(orderItemVo.getProductId());
            if (product.isEmpty())
                throw new NotFoundException(String.format("Product with id %d not found", orderItemVo.getProductId()));
            var orderItem = OrderItem.builder().order(order)
                    .product(product.get())
                    .quantity(orderItemVo.getQuantity())
                    .build();
            orderItems.add(orderItem);
        }
        return orderItems;
    }

    private double calculateTotalPrice(List<OrderItem> orderItems) {
        var totalPrice = 0.0;
        for(var orderItem: orderItems)
            totalPrice += orderItem.getProduct().getPrice()*orderItem.getQuantity();
        return totalPrice;
    }
}
