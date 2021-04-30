package com.egrocery.services;

import com.egrocery.entities.*;
import com.egrocery.exceptions.CityNotFoundException;
import com.egrocery.models.UserVo;
import com.egrocery.models.SellerCreationVo;
import com.egrocery.repositories.CityRepository;
import com.egrocery.repositories.SellerRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class SellerService {
    private final SellerRepository sellerRepository;
    private final UserService userService;
    private final CityRepository cityRepository;
    private final ShopService shopService;

    public SellerService(SellerRepository sellerRepository, UserService userService, CityRepository cityRepository, ShopService shopService) {
        this.sellerRepository = sellerRepository;
        this.userService = userService;
        this.cityRepository = cityRepository;
        this.shopService = shopService;
    }
    public Seller createEmpty(User user) {
        var seller = Seller.builder().user(user).build();
        return sellerRepository.save(seller);
    }
    public Seller create(Seller seller) {
        return sellerRepository.save(seller);
    }

    public List<Seller> getAllSellers() {
        return sellerRepository.findAll();
    }

    @Transactional
    public Seller register(SellerCreationVo sellerCreationVo) {
        var userVo = UserVo.builder()
                .phoneNumber(sellerCreationVo.getPhoneNumber())
                .password(sellerCreationVo.getPassword())
                .role(Role.ROLE_SELLER)
                .accountEnabled(sellerCreationVo.isAccountEnabled())
                .build();
        var savedUser = userService.register(userVo);

        var city = cityRepository.findById(sellerCreationVo.getCityId());
        if (city.isEmpty()) throw new CityNotFoundException(String.format("City with id %d not found", sellerCreationVo.getCityId()));

        var shop = Shop.builder()
                .name(sellerCreationVo.getShopName())
                .geom(sellerCreationVo.getGeom())
                .description(sellerCreationVo.getDescription())
                .city(city.get())
                .build();
        var savedShop = shopService.create(shop);

        var seller = Seller.builder()
                .firstName(sellerCreationVo.getFirstName())
                .lastName(sellerCreationVo.getLastName())
                .shop(savedShop)
                .user(savedUser)
                .build();


        var savedSeller = sellerRepository.save(seller);

        return savedSeller;
    }
}
