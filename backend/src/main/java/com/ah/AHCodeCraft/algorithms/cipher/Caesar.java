package com.ah.AHCodeCraft.algorithms.cipher;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(value="prototype")
public class Caesar {

    public String encode(String plaintext, int shift) {
        StringBuilder encodedText = new StringBuilder();
        for (char c : plaintext.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isLowerCase(c) ? 'a' : 'A';
                encodedText.append((char) (((c - base + shift) % 26) + base));
            } else {
                encodedText.append(c);
            }
        }
        return encodedText.toString();
    }

    public String decode(String encodedText, int shift) {
        shift = (shift % 26 + 26) % 26;
        StringBuilder decodedText = new StringBuilder();
        for (char c : encodedText.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isLowerCase(c) ? 'a' : 'A';
                char decodedChar = (char) (((c - base - shift + 26) % 26) + base);
                decodedText.append(decodedChar);
            } else {
                decodedText.append(c);
            }
        }
        return decodedText.toString();
    }

}

