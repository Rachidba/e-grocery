package com.egrocery.security.endpoint;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.ServletException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.egrocery.security.auth.jwt.extractor.TokenExtractor;
import com.egrocery.security.auth.jwt.verifier.TokenVerifier;
import com.egrocery.security.config.JwtSettings;
import com.egrocery.security.config.SecurityConstants;
import com.egrocery.security.exceptions.InvalidJwtToken;
import com.egrocery.security.model.UserContext;
import com.egrocery.security.model.token.JwtToken;
import com.egrocery.security.model.token.JwtTokenFactory;
import com.egrocery.security.model.token.RawAccessJwtToken;
import com.egrocery.security.model.token.RefreshToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class RefreshTokenEndpoint {
    @Autowired private JwtTokenFactory tokenFactory;
    @Autowired private JwtSettings jwtSettings;
    @Autowired private UserDetailsService userService;
    @Autowired private TokenVerifier tokenVerifier;
    @Autowired @Qualifier("jwtHeaderTokenExtractor") private TokenExtractor tokenExtractor;

    Logger logger = LoggerFactory.getLogger(RefreshTokenEndpoint.class);

    @RequestMapping(value="/api/auth/token", method=RequestMethod.GET, produces={ MediaType.APPLICATION_JSON_VALUE })
    public @ResponseBody
    JwtToken refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
       logger.info("Refresh token called");
        String tokenPayload = tokenExtractor.extract(request.getHeader(SecurityConstants.AUTHENTICATION_HEADER_NAME));
        
        RawAccessJwtToken rawToken = new RawAccessJwtToken(tokenPayload);
        RefreshToken refreshToken = RefreshToken.create(rawToken, jwtSettings.getTokenSigningKey()).orElseThrow(() -> new InvalidJwtToken());

        String jti = refreshToken.getJti();
        if (!tokenVerifier.verify(jti)) {
            throw new InvalidJwtToken();
        }

        String subject = refreshToken.getSubject();

        logger.info("Refresh token called by user: " + subject);

        UserDetails user = userService.loadUserByUsername(subject);

        if (user.getAuthorities() == null) throw new InsufficientAuthenticationException("User has no roles assigned");

        List<GrantedAuthority> authorities = user.getAuthorities().stream()
                .filter(obj -> obj instanceof SimpleGrantedAuthority)
                .map(obj -> (SimpleGrantedAuthority) obj)
                .collect(Collectors.toList());

        UserContext userContext = UserContext.create(user.getUsername(), authorities);

        return tokenFactory.createAccessJwtToken(userContext);
    }
}
