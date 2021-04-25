package com.egrocery.services;

import com.egrocery.entities.Admin;
import com.egrocery.entities.User;
import com.egrocery.repositories.AdminRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }
    public Admin createEmpty(User user) {
        var admin = Admin.builder().user(user).build();
        return adminRepository.save(admin);
    }
}
