package com.egrocery.security;
import com.egrocery.entities.User;
import com.egrocery.repositories.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var user = this.userRepository.findByPhoneNumber(username)
                .map(BridgeUser::new)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        return user;
    }

    private static class BridgeUser extends User implements UserDetails {
        public BridgeUser(User user) {
            super(user);
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            var userAuthorities = new ArrayList<GrantedAuthority>();
            userAuthorities.add(new SimpleGrantedAuthority(super.getRole().name()));
            return userAuthorities;
        }

        @Override
        public String getUsername() {
            return super.getPhoneNumber();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return super.isEnabled();
        }
    }
}