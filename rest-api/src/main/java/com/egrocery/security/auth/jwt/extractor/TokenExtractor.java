package com.egrocery.security.auth.jwt.extractor;

public interface TokenExtractor {
    String extract(String payload);
}
