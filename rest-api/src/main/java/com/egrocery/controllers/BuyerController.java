package com.egrocery.controllers;

import com.egrocery.models.BuyerCreationVo;
import com.egrocery.models.BuyerVo;
import com.egrocery.services.BuyerService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/buyers")
public class BuyerController {
    private final BuyerService buyerService;

    public BuyerController(BuyerService buyerService) {
        this.buyerService = buyerService;
    }

    @PostMapping
    public ResponseEntity<BuyerVo> createBuyer(@Valid @RequestBody BuyerCreationVo buyerCreationVo) {
        var createBuyer = buyerService.createBuyer(buyerCreationVo);
        return ResponseEntity.ok(createBuyer);
    }

    @GetMapping
    public ResponseEntity<List<BuyerVo>> getAllBuyers() {
        var buyers = buyerService.getAllBuyers();
        var responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Expose-Headers", "Content-Range");
        responseHeaders.set("Content-Range", String.format("shops 0-%d/%d", buyers.size(), buyers.size()));
        var httpStatus = buyers.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).headers(responseHeaders).body(buyers);
    }
}