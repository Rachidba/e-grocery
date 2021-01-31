/*
 * package com.egrocery.web;
 * 
 * import java.util.List;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.web.bind.annotation.CrossOrigin; import
 * org.springframework.web.bind.annotation.RequestMapping; import
 * org.springframework.web.bind.annotation.RequestMethod; import
 * org.springframework.web.bind.annotation.RestController;
 * 
 * import com.egrocery.dao.CategorieRepository; import
 * com.egrocery.entities.Categorie;
 * 
 * @RestController
 * 
 * @CrossOrigin("*") public class RestService {
 * 
 * 
 * @Autowired private CategorieRepository categorieRepository;
 * 
 * 
 * 
 * @RequestMapping(value = "/categories", method = RequestMethod.GET) public
 * List<Categorie> getContacts() {
 * 
 * return categorieRepository.findAll();
 * 
 * }
 * 
 * }
 */