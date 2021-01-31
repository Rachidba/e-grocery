package com.egrocery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.egrocery.entities.Produit;

@RepositoryRestResource
@CrossOrigin("*")
public interface ProduitRepository extends JpaRepository<Produit, Long>{

}