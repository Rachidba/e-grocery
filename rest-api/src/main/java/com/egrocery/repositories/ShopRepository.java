package com.egrocery.repositories;

import com.egrocery.entities.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShopRepository extends JpaRepository<Shop, Long> {
    @Query(value = "SELECT s.id, s.name, s.description, s.geom, s.img_url, s.city_id, ST_Distance(s.geom, ST_SetSRID(ST_MakePoint(?1, ?2),4326)\\:\\:geography) AS distance "
            + "FROM shops s "
            + "ORDER BY distance "
            + "LIMIT 10"
            , nativeQuery = true)
    List<Shop> findShopsByDistanceFromUser(Double userLongitude, Double userLatitude);
}
