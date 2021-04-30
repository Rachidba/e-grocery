package com.egrocery.security.config;

import java.util.Arrays;
import java.util.List;

import com.egrocery.entities.Role;
import com.egrocery.security.CustomCorsFilter;
import com.egrocery.security.RestAuthenticationEntryPoint;
import com.egrocery.security.auth.ajax.AjaxAuthenticationProvider;
import com.egrocery.security.auth.ajax.AjaxLoginProcessingFilter;
import com.egrocery.security.auth.jwt.JwtAuthenticationProvider;
import com.egrocery.security.auth.jwt.JwtTokenAuthenticationProcessingFilter;
import com.egrocery.security.auth.jwt.SkipPathRequestMatcher;
import com.egrocery.security.auth.jwt.extractor.TokenExtractor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    private final RestAuthenticationEntryPoint authenticationEntryPoint;
    private final AuthenticationSuccessHandler successHandler;
    private final AuthenticationFailureHandler failureHandler;
    private final AjaxAuthenticationProvider ajaxAuthenticationProvider;
    private final JwtAuthenticationProvider jwtAuthenticationProvider;

    private final TokenExtractor tokenExtractor;

    @Autowired
    private  AuthenticationManager authenticationManager;

    private final ObjectMapper objectMapper;

    public WebSecurityConfig(ObjectMapper objectMapper,
                             RestAuthenticationEntryPoint authenticationEntryPoint,
                             AuthenticationSuccessHandler successHandler,
                             AuthenticationFailureHandler failureHandler,
                             AjaxAuthenticationProvider ajaxAuthenticationProvider,
                             JwtAuthenticationProvider jwtAuthenticationProvider,
                             TokenExtractor tokenExtractor) {
        this.objectMapper = objectMapper;
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.successHandler = successHandler;
        this.failureHandler = failureHandler;
        this.ajaxAuthenticationProvider = ajaxAuthenticationProvider;
        this.jwtAuthenticationProvider = jwtAuthenticationProvider;
        this.tokenExtractor = tokenExtractor;
    }

    protected AjaxLoginProcessingFilter buildAjaxLoginProcessingFilter(String loginEntryPoint) throws Exception {
        AjaxLoginProcessingFilter filter = new AjaxLoginProcessingFilter(loginEntryPoint, successHandler, failureHandler, objectMapper);
        filter.setAuthenticationManager(this.authenticationManager);
        return filter;
    }

    protected JwtTokenAuthenticationProcessingFilter buildJwtTokenAuthenticationProcessingFilter(List<RequestMatcher> pathsToSkip, String pattern) throws Exception {
        SkipPathRequestMatcher matcher = new SkipPathRequestMatcher(pathsToSkip, pattern);
        JwtTokenAuthenticationProcessingFilter filter
            = new JwtTokenAuthenticationProcessingFilter(failureHandler, tokenExtractor, matcher);
        filter.setAuthenticationManager(this.authenticationManager);
        return filter;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(ajaxAuthenticationProvider);
        auth.authenticationProvider(jwtAuthenticationProvider);
    }
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        List<RequestMatcher> permitAllEndpointList = Arrays.asList(
//                new AntPathRequestMatcher("/v2/api-docs"),
//                new AntPathRequestMatcher("/configuration/ui"),
//                new AntPathRequestMatcher("/swagger-resources/**"),
//                new AntPathRequestMatcher("/configuration/security"),
//                new AntPathRequestMatcher("/swagger-ui.html"),
//                new AntPathRequestMatcher("/webjars/**"),
//                new AntPathRequestMatcher("/console"),
                new AntPathRequestMatcher(SecurityConstants.AUTHENTICATION_URL),
                new AntPathRequestMatcher(SecurityConstants.CATEGORIES_URL, HttpMethod.GET.toString()),
                new AntPathRequestMatcher(SecurityConstants.SUBCATEGORIES_URL, HttpMethod.GET.toString()),
                new AntPathRequestMatcher(SecurityConstants.SHOPS_URL, HttpMethod.GET.toString())
        );

        http
            .csrf().disable() // We don't need CSRF for JWT based authentication
            .exceptionHandling()
            .authenticationEntryPoint(this.authenticationEntryPoint)

            .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

            .and()
                .authorizeRequests()
                .requestMatchers(permitAllEndpointList.toArray(new RequestMatcher[permitAllEndpointList.size()])).permitAll()
                .antMatchers(HttpMethod.POST, SecurityConstants.CATEGORIES_URL).access("hasRole('" + Role.ROLE_ADMIN.toString() + "')")
                .antMatchers(HttpMethod.POST, SecurityConstants.SUBCATEGORIES_URL).access("hasRole('" + Role.ROLE_ADMIN.toString() + "')")
                .antMatchers(HttpMethod.POST, SecurityConstants.SHOPS_URL).access("hasRole('" + Role.ROLE_ADMIN.toString() + "')")
                .antMatchers(HttpMethod.GET, SecurityConstants.ORDER_URL).access("hasRole('" + Role.ROLE_ADMIN.toString() + "')")
                .antMatchers(HttpMethod.POST, SecurityConstants.ORDER_URL).access("hasRole('" + Role.ROLE_BUYER.toString() + "')")
                .antMatchers(HttpMethod.POST, SecurityConstants.SELLERS_URL).access("hasRole('" + Role.ROLE_ADMIN.toString() + "')")
                .antMatchers(HttpMethod.GET, SecurityConstants.SELLERS_URL).access("hasRole('" + Role.ROLE_ADMIN.toString() + "')")

                .and()
                .authorizeRequests()
                .antMatchers(SecurityConstants.API_ROOT_URL).authenticated() // Protected API End-points
            .and()
                .addFilterBefore(new CustomCorsFilter(), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(buildAjaxLoginProcessingFilter(SecurityConstants.AUTHENTICATION_URL), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(buildJwtTokenAuthenticationProcessingFilter(permitAllEndpointList,
                        SecurityConstants.API_ROOT_URL), UsernamePasswordAuthenticationFilter.class);
    }
}
