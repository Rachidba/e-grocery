package com.egrocery.controllers;

import com.egrocery.entities.Seller;
import com.egrocery.models.SellerCreationVo;
import com.egrocery.services.SellerService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/sellers")
public class SellerController {
    private final SellerService sellerService;

    public SellerController(SellerService sellerService) {
        this.sellerService = sellerService;
    }

    @PostMapping
    public ResponseEntity<Seller> createSeller(@RequestBody SellerCreationVo sellerCreationVo) {
        var createdSeller = sellerService.register(sellerCreationVo);
        return ResponseEntity.ok(createdSeller);
    }

    @GetMapping
    public ResponseEntity<List<Seller>> getAllSellers() {
        var sellers = sellerService.getAllSellers();
        var responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Expose-Headers", "Content-Range");
        responseHeaders.set("Content-Range", String.format("shops 0-%d/%d", sellers.size(), sellers.size()));
        var httpStatus = sellers.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).headers(responseHeaders).body(sellers);
    }
}
