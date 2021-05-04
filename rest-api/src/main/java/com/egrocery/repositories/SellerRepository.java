package com.egrocery.repositories;

import com.egrocery.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {
    public Optional<Seller> findByProfileId(Long profileId);

}
