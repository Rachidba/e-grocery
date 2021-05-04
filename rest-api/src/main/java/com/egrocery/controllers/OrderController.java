package com.egrocery.controllers;

import com.egrocery.models.OrderCreationVo;
import com.egrocery.models.OrderVo;
import com.egrocery.services.OrderService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/orders")
public class OrderController {
    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<OrderVo>> getAllOrders() {
        var orders = orderService.getAllOrders();
        var responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Expose-Headers", "Content-Range");
        responseHeaders.set("Content-Range", String.format("shops 0-%d/%d", orders.size(), orders.size()));
        var httpStatus = orders.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).headers(responseHeaders).body(orders);
    }

    @PostMapping
    public ResponseEntity<OrderVo> placeOrder(@Valid @RequestBody OrderCreationVo orderCreationVo) {
        var savedOrder = orderService.createOrder(orderCreationVo);
        return ResponseEntity.ok(savedOrder);
    }
}
