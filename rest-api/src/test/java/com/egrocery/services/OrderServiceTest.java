package com.egrocery.services;

import com.egrocery.entities.Order;
import com.egrocery.entities.OrderItem;
import com.egrocery.entities.Product;
import com.egrocery.repositories.OrderItemRepository;
import com.egrocery.repositories.OrderRepository;
import com.egrocery.repositories.ProductRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

@SpringBootTest
public class OrderServiceTest {
    @Mock
    private OrderRepository orderRepository;
    @Mock
    private OrderItemRepository orderItemRepository;
    @Mock
    private ProductRepository productRepository;
    @InjectMocks
    private OrderService orderService;

//    @Test
//    public void create_shouldThrowException_whenProductNotFound() {
//        var product = Product.builder()
//                .id(new Long(1)).title("Lait 1L - CENTRALE")
//                .unitOfMeasure("1 Unité")
//                .price(7)
//                .imgUrl("http://via.placeholder.com/640x360")
//                .build();
//
//        var orderItem1 = OrderItem.builder().id(new Long(1)).quantity()
//        when(productRepository.findById(anyLong())).thenReturn(Optional.of(product));
//
//
//    }
}
