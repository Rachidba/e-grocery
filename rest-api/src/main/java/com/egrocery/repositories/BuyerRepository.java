package com.egrocery.repositories;

import com.egrocery.entities.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BuyerRepository extends JpaRepository<Buyer, Long> {
    public Optional<Buyer> findByProfileId(Long profileId);
}
