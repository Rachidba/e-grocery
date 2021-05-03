package com.egrocery.services;

import com.egrocery.entities.Buyer;
import com.egrocery.entities.Role;
import com.egrocery.exceptions.CityNotFoundException;
import com.egrocery.mappers.BuyerMapper;
import com.egrocery.models.BuyerCreationVo;
import com.egrocery.models.BuyerVo;
import com.egrocery.models.UserVo;
import com.egrocery.repositories.BuyerRepository;
import com.egrocery.repositories.CityRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BuyerService {
    private final BuyerRepository buyerRepository;
    private final BuyerMapper buyerMapper;
    private final UserService userService;
    private final CityRepository cityRepository;

    public BuyerService(BuyerRepository buyerRepository, BuyerMapper buyerMapper, UserService userService, CityRepository cityRepository) {
        this.buyerRepository = buyerRepository;
        this.buyerMapper = buyerMapper;
        this.userService = userService;
        this.cityRepository = cityRepository;
    }

    public List<BuyerVo> getAllBuyers() {
        var buyers = buyerRepository.findAll();
        return buyerMapper.mapTo(buyers);
    }

    @Transactional
    public BuyerVo createBuyer(BuyerCreationVo buyerCreationVo) {
        var userVo = UserVo.builder()
                .phoneNumber(buyerCreationVo.getPhoneNumber())
                .password(buyerCreationVo.getPassword())
                .role(Role.ROLE_BUYER)
                .accountEnabled(buyerCreationVo.isAccountEnabled())
                .build();
        var savedUser = userService.register(userVo);

        var city = cityRepository.findById(buyerCreationVo.getCityId());
        if (city.isEmpty()) throw new CityNotFoundException(String.format("City with id %d not found", buyerCreationVo.getCityId()));

        var buyer = Buyer.builder()
                .firstName(buyerCreationVo.getFirstName())
                .lastName(buyerCreationVo.getLastName())
                .homeLocationGeom(buyerCreationVo.getHomeLocationGeom())
                .city(city.get())
                .user(savedUser)
                .build();

        var savedBuyer = buyerRepository.save(buyer);
        return buyerMapper.mapTo(savedBuyer);
    }
}
