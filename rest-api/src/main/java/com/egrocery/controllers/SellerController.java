package com.egrocery.controllers;

import com.egrocery.entities.Seller;
import com.egrocery.models.SellerCreationVo;
import com.egrocery.services.SellerService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/sellers")
public class SellerController {
    private final SellerService sellerService;

    public SellerController(SellerService sellerService) {
        this.sellerService = sellerService;
    }

    @PostMapping
    public Seller registerSeller(@RequestBody SellerCreationVo sellerCreationVo) {
        return sellerService.register(sellerCreationVo);
    }
}
