package com.egrocery.services;

import com.egrocery.entities.User;
import com.egrocery.exceptions.PhoneNumberAlreadyExistsException;
import com.egrocery.models.UserVo;
import com.egrocery.repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }
    public User register(UserVo userVo) {
        if (userRepository.existsByPhoneNumber(userVo.getPhoneNumber()))
            throw new PhoneNumberAlreadyExistsException("Phone number already used");
        var user = User.builder()
                .phoneNumber(userVo.getPhoneNumber())
                .password(bCryptPasswordEncoder.encode(userVo.getPassword()))
                .role(userVo.getRole())
                .enabled(userVo.isAccountEnabled())
                .build();
        var savedUser = userRepository.save(user);
        return savedUser;
    }
}
