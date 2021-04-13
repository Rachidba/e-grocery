package com.egrocery.security.auth.ajax;

import java.util.List;
import java.util.stream.Collectors;

import com.egrocery.security.model.UserContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

@Component
public class AjaxAuthenticationProvider implements AuthenticationProvider {
    private final BCryptPasswordEncoder encoder;
    private final UserDetailsService userService;

    @Autowired
    public AjaxAuthenticationProvider(final UserDetailsService userService, final BCryptPasswordEncoder encoder) {
        this.userService = userService;
        this.encoder = encoder;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        Assert.notNull(authentication, "No authentication data provided");

        String username = (String) authentication.getPrincipal();
        String password = (String) authentication.getCredentials();

        UserDetails user = userService.loadUserByUsername(username);
        
        if (!encoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("Authentication Failed. Username or Password not valid.");
        }

        if (user.getAuthorities() == null) throw new InsufficientAuthenticationException("User has no roles assigned");

        List<GrantedAuthority> authorities = user.getAuthorities().stream()
                .filter(obj -> obj instanceof SimpleGrantedAuthority)
                .map(obj -> (SimpleGrantedAuthority) obj)
                .collect(Collectors.toList());
        
        UserContext userContext = UserContext.create(user.getUsername(), authorities);
        
        return new UsernamePasswordAuthenticationToken(userContext, null, userContext.getAuthorities());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }
}
