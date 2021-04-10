package com.egrocery.controllers;

import com.egrocery.entities.Shop;
import com.egrocery.repositories.ShopRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/shops")
public class ShopController {
    private final ShopRepository shopRepository;

    public ShopController(ShopRepository shopRepository) {
        this.shopRepository = shopRepository;
    }

    @GetMapping
    public ResponseEntity<List<Shop>> getAllShops() {
        var shops = shopRepository.findAll();
        var httpStatus = shops.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).body(shops);
    }

    @GetMapping(path = "/nearbyshops")
    public ResponseEntity<List<Shop>> findShopsByDistanceFromUser(@RequestParam("userlocation") List<Double> userLocation) {
        double userLongitude = userLocation.get(0);
        double userLatitude = userLocation.get(1);

        var nearbyShops = shopRepository.findShopsByDistanceFromUser(userLongitude, userLatitude);
        var httpStatus = nearbyShops.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).body(nearbyShops);
    }

}
