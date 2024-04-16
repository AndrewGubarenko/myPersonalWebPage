package com.ah.AHCodeCraft.algorithms.cipher;

import org.springframework.stereotype.Component;

@Component
public class Caesar {

    public String encode(String plaintext, int shift) {
        StringBuilder encodedText = new StringBuilder();
        for (char c : plaintext.toCharArray()) {
            char base = Character.isLowerCase(c) ? 'a' : 'A';
            encodedText.append((char) (((c - base + shift) % 26) + base));
        }
        return encodedText.toString();
    }

    public String decode(String encodedText, int shift) {
        shift = (shift % 26 + 26) % 26;
        StringBuilder decodedText = new StringBuilder();
        for (char c : encodedText.toCharArray()) {
            char base = Character.isLowerCase(c) ? 'a' : 'A';
            decodedText.append((char) (((c - base - shift + 26) % 26) + base));
        }
        return decodedText.toString();
    }

}

