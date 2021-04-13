package com.egrocery.security.auth.ajax;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.egrocery.entities.User;
import com.egrocery.repositories.UserRepository;
import com.egrocery.security.model.UserContext;
import com.egrocery.security.model.token.JwtToken;
import com.egrocery.security.model.token.JwtTokenFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class AjaxAwareAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    private final ObjectMapper mapper;
    private final JwtTokenFactory tokenFactory;
    private final UserRepository userRepository;

    @Autowired
    public AjaxAwareAuthenticationSuccessHandler(
            final ObjectMapper mapper,
            final JwtTokenFactory tokenFactory,
            final UserRepository userRepository) {
        this.mapper = mapper;
        this.tokenFactory = tokenFactory;
        this.userRepository = userRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        UserContext userContext = (UserContext) authentication.getPrincipal();
        User currentUser = userRepository.findByPhoneNumber(userContext.getUsername()).get();

        if(currentUser.isEnabled()) {
            JwtToken accessToken = tokenFactory.createAccessJwtToken(userContext);
            JwtToken refreshToken = tokenFactory.createRefreshToken(userContext);

            Map<String, String> tokenMap = new HashMap<String, String>();
            tokenMap.put("token", accessToken.getToken());
//            tokenMap.put("refreshToken", refreshToken.getToken());
            tokenMap.put("role", currentUser.getRole().name());


            response.setStatus(HttpStatus.OK.value());
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            mapper.writeValue(response.getWriter(), tokenMap);
        } else {
            response.setStatus(HttpStatus.LOCKED.value());
        }

        clearAuthenticationAttributes(request);
    }

    /**
     * Removes temporary authentication-related data which may have been stored
     * in the session during the authentication process..
     * 
     */
    protected final void clearAuthenticationAttributes(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if (session == null) {
            return;
        }

        session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
    }
}
