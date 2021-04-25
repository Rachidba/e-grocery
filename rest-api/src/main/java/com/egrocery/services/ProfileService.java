package com.egrocery.services;

import com.egrocery.entities.Profile;
import com.egrocery.entities.User;
import org.hibernate.cfg.NotYetImplementedException;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    private final AdminService adminService;
    private final SellerService sellerService;

    public ProfileService(AdminService adminService, SellerService sellerService) {
        this.adminService = adminService;
        this.sellerService = sellerService;
    }
    public Profile createEmpty(User user) {
        switch (user.getRole()) {
            case ROLE_ADMIN: return adminService.createEmpty(user);
            case ROLE_SELLER: return sellerService.createEmpty(user);
            case ROLE_BUYER: throw new NotYetImplementedException(user.getRole().name() + " creation not implemented");
            default: throw new IllegalArgumentException("The given user role not known");
        }
    }
}
