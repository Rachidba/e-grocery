package com.egrocery.repositories;

import com.egrocery.entities.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShopRepository extends JpaRepository<Shop, Long> {
    @Query(value = "SELECT s.id, s.name, s.geom, s.img_url, ST_Distance(s.geom,ST_SetSRID(ST_Point(:userLongitude,:userLatitude),4326)) AS distance "
            + "FROM shops s "
            + "ORDER BY s.geom  <-> ST_SetSRID(ST_Point(:userLongitude,:userLatitude),4326) "
            + "LIMIT 10"
            , nativeQuery = true)
    List<Shop> findShopsByDistanceFromUser(@Param("userLongitude") Double userLongitude,
                                                  @Param("userLatitude")  Double userLatitude);
}
