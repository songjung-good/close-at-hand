package dev.rainbowmirror.closeathand.common.util;

import org.apache.commons.lang3.RandomStringUtils;

public class TokenGenrator {
    private static final int TOKEN_LENGTH = 20;

    public static String randomCharacter(int length){
        return RandomStringUtils.randomAlphanumeric(length);
    }

    public static String randomChracterWithPrefix(String prefix){
        return prefix + randomCharacter(TOKEN_LENGTH - prefix.length());
    }
}
