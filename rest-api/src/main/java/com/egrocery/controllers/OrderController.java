package com.egrocery.controllers;

import com.egrocery.entities.Order;
import com.egrocery.exceptions.NotFoundException;
import com.egrocery.models.OrderVo;
import com.egrocery.services.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/orders")
public class OrderController {
    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        var orders = orderService.getAllOrders();
        var httpStatus = orders.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).body(orders);
    }

    @PostMapping
    public ResponseEntity postOrder(@RequestBody OrderVo orderVo) {
        try {
            orderService.createOrder(orderVo);
            return ResponseEntity.ok().build();
        } catch (NotFoundException ex) {
            return ResponseEntity.notFound().build();
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(400).build();
        }
    }
}
