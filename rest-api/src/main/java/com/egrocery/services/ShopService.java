package com.egrocery.services;

import com.egrocery.entities.Shop;
import com.egrocery.models.ShopVo;
import com.egrocery.repositories.SellerRepository;
import com.egrocery.repositories.ShopRepository;
import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.GeometryFactory;
import com.vividsolutions.jts.geom.PrecisionModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShopService {
    private final UserService userService;
    private final SellerRepository sellerRepository;
    private final ShopRepository shopRepository;

    public ShopService(UserService userService, SellerRepository sellerRepository, ShopRepository shopRepository) {
        this.userService = userService;
        this.sellerRepository = sellerRepository;
        this.shopRepository = shopRepository;
    }
    public Shop create(Shop shop) {
        return shopRepository.save(shop);
    }
    public List<ShopVo> getNearbyShops(Double userLongitude, Double userLatitude) {
        var shops = shopRepository.findShopsByDistanceFromUser(userLongitude, userLatitude);
        return shops.stream().map(shop -> ShopVo.builder()
                .id(shop.getId())
                .name(shop.getName())
                .description(shop.getDescription())
                .distance(calculateDistance(shop.getGeom(), userLongitude, userLatitude))
                .build()).collect(Collectors.toList());
    }
    private double calculateDistance(com.vividsolutions.jts.geom.Point point, Double userLongitude, Double userLatitude) {
        var geometryFactory = new GeometryFactory(new PrecisionModel(), 4326);
        var currentUserPoint = geometryFactory.createPoint(new Coordinate(userLongitude, userLatitude));
        return currentUserPoint.distance(point)/180 * Math.PI * 6371;
    }
}
