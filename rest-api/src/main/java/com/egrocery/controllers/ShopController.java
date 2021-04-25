package com.egrocery.controllers;

import com.egrocery.entities.Shop;
import com.egrocery.models.ShopVo;
import com.egrocery.repositories.ShopRepository;

import com.egrocery.services.ShopService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/shops")
public class ShopController {
    private final ShopRepository shopRepository;
    private final ShopService shopService;

    public ShopController(ShopRepository shopRepository, ShopService shopService) {
        this.shopRepository = shopRepository;
        this.shopService = shopService;
    }

    @GetMapping
    public ResponseEntity<List<Shop>> getAllShops() {
        var shops = shopRepository.findAll();
        var responseHeaders = new HttpHeaders();

        responseHeaders.set("Access-Control-Expose-Headers", "Content-Range");
        responseHeaders.set("Content-Range", String.format("shops 0-%d/%d", shops.size(), shops.size()));
        var httpStatus = shops.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).headers(responseHeaders).body(shops);
    }

    @GetMapping(path = "/nearbyshops")
    public ResponseEntity<List<ShopVo>> findShopsByDistanceFromUser(@RequestParam("userlocation") List<Double> userLocation) {
        double userLongitude = userLocation.get(0);
        double userLatitude = userLocation.get(1);

        var nearbyShops = shopService.getNearbyShops(userLongitude, userLatitude);
        var httpStatus = nearbyShops.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return ResponseEntity.status(httpStatus).body(nearbyShops);
    }
}
