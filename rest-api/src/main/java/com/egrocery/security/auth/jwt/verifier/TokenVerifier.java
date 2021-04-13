package com.egrocery.security.auth.jwt.verifier;

public interface TokenVerifier {
    boolean verify(String jti);
}
