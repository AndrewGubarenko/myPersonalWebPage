package com.ah.AHCodeCraft.utils;

import org.springframework.stereotype.Component;

@Component
public class RequestProcessingUtil {

    public static boolean containsOnlyAllowedSymbols(String input) {
        for (char c : input.toCharArray()) {
            if (!Character.isLetter(c) && c != ' ') {
                return true;
            }
        }
        return false;
    }
}
