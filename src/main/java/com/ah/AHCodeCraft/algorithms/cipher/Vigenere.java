package com.ah.AHCodeCraft.algorithms.cipher;

import org.springframework.stereotype.Component;

@Component
public class Vigenere {

    public String encode(String plaintext, String keyword) {
        StringBuilder encodedText = new StringBuilder();
        int keywordLength = keyword.length();
        for (int i = 0; i < plaintext.length(); i++) {
            char plainChar = plaintext.charAt(i);
            if (Character.isLetter(plainChar)) {
                char keywordChar = keyword.charAt(i % keywordLength);
                char encodedChar = shiftChar(plainChar, keywordChar);
                encodedText.append(encodedChar);
            } else {
                encodedText.append(plainChar);
            }
        }
        return encodedText.toString();
    }

    public String decode(String encodedText, String keyword) {
        StringBuilder decodedText = new StringBuilder();
        int keywordLength = keyword.length();
        for (int i = 0; i < encodedText.length(); i++) {
            char encodedChar = encodedText.charAt(i);
            if (Character.isLetter(encodedChar)) {
                char keywordChar = keyword.charAt(i % keywordLength);
                char decodedChar = unshiftChar(encodedChar, keywordChar);
                decodedText.append(decodedChar);
            } else {
                decodedText.append(encodedChar);
            }
        }
        return decodedText.toString();
    }

    private char shiftChar(char c, char keyChar) {
        int shift = Character.toUpperCase(keyChar) - 'A';
        return shiftChar(c, shift);
    }

    private char unshiftChar(char c, char keyChar) {
        int shift = Character.toUpperCase(keyChar) - 'A';
        return shiftChar(c, -shift);
    }

    private char shiftChar(char c, int shift) {
        char base = Character.isLowerCase(c) ? 'a' : 'A';
        return (char) (((c - base + shift + 26) % 26) + base);
    }
}

