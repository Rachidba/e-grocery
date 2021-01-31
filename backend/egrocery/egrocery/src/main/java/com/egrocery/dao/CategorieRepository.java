package com.egrocery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.egrocery.entities.Categorie;

@RepositoryRestResource
@CrossOrigin("*")

public interface CategorieRepository extends JpaRepository<Categorie, Long>{

}
